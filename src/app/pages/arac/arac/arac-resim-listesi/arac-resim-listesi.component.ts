import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpResponse } from '@angular/common/http';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { forkJoin } from 'rxjs';
import { AracService, AracResimService, AracResimDTO } from '@zyazilim/online-ihale-data';
import { AracResimExtendedDTO } from '../../models/arac-resim-model';

@Component({
  selector: 'arac-resim-listesi',
  templateUrl: './arac-resim-listesi.component.html',
  styleUrls: ['./arac-resim-listesi.component.scss']
})
export class AracResimListesiComponent implements OnInit {
  @Input() aracId: string;
  resimler: any[];
  veriGeldiMi: boolean = true;
  croppedImages: any;
  kaydediliyor: boolean;

  constructor(
    private aracService: AracService,
    private aracResimService: AracResimService) { }

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.veriGeldiMi = false;
    this.aracService.getResimleri(this.aracId)
      .subscribe(data => {
        this.resimler = data;
        this.veriGeldiMi = true;
      });
  }
  resimSil(id, index) {
    if (id) {
      this.aracResimService.delete(id)
        .subscribe(
          () =>
            this.resimler.splice(index, 1)
        )
    } else {
      this.resimler.splice(index, 1);
    }
  }
  drop(e: CdkDragDrop<any[]>) {
    moveItemInArray(this.resimler, e.previousIndex, e.currentIndex);
  }
  resimYuklendi(e: any) {
    this.resimler.push({ aracId: this.aracId, imgURL: e.imgURL, resimAciklama: '', file: e.file, progress: 0, beforeCropped: e.file })
  }
  imageCropped(event: ImageCroppedEvent, resim) {
    resim.file = event.file;
  }
  thumbnailCropped(event: ImageCroppedEvent, resim) {
    resim.thumbnail = event.file;
  }
  mediumCropped(event: ImageCroppedEvent, resim) {
    resim.medium = event.file;
  }
  save() {
    this.kaydediliyor = true;
    if (this.resimler.length === 0) {
      return;
    }
    let requests = [];
    for (let index = 0; index < this.resimler.length; index++) {
      const resim = this.resimler[index];
      if (!resim.id) {
        // let formData: FormData = new FormData();
        // formData.append('file', resim.file as Blob, this.aracId + '.png');
        // formData.append('thumbnail', resim.thumbnail as Blob, this.aracId + '-thumbnail.png');
        // formData.append('medium', resim.medium as Blob, this.aracId + '-medium.png');
        // formData.append('aracId', this.aracId);
        // formData.append('resimAciklama', resim.resimAciklama);
        // formData.append('resimSira', index.toString());
        requests.push(this.aracResimService.post(null, this.aracId, null, null, null, null,
          { fileName: this.aracId + '.png', data: resim.file },
          { fileName: this.aracId + '-medium.png', data: resim.medium },
          { fileName: this.aracId + '-thumbnail.png', data: resim.thumbnail },
          resim.resimAciklama,
          index,
          true
        ));
      } else {
        requests.push(this.aracResimService.put(resim.id, index));
      }

    }
    forkJoin(requests).subscribe(d => {
      for (let i = 0; i < d.length; i++) {
        const element = d[i];
        const resim = this.resimler[i];
        let res = (element as HttpResponse<AracResimExtendedDTO>);
        if (res && res.body) {
          let aracResim = res.body;
          resim.id = aracResim.id;
          resim.fullUrl = aracResim.fullUrl;
        }
      }
      this.kaydediliyor = false;
    });
  }
}
