import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpEventType } from '@angular/common/http';
import { SliderService, SliderListeDTO, SliderIcerikGuncelleDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'slider-resimleri',
  templateUrl: './slider-resimleri.component.html',
  styleUrls: ['./slider-resimleri.component.scss']
})
export class SliderResimleriComponent implements OnInit {
  resimler: any[];
  veriGeldiMi: boolean = true;
  originalResimler: SliderListeDTO[];
  icerikEdit: boolean;
  sliderIcerik: SliderIcerikGuncelleDTO;

  constructor(
    private sliderService: SliderService) { }

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.veriGeldiMi = false;
    this.sliderService.getAll()
      .subscribe(data => {
        this.originalResimler = data;
        this.resimler = data;
        this.veriGeldiMi = true;
      });
  }
  resimSil(id, index) {
    if (id) {
      this.sliderService.delete(id)
        .subscribe(
          res =>
            this.getData()
        )
    } {
      this.resimler.splice(index, 1);
    }
  }
  icerik(id) {
    this.icerikEdit = true;
    this.sliderService.getIcerik(id)
      .subscribe(d => {
        this.sliderIcerik = d;
      });
  }
  icerikKaydet() {
    this.icerikEdit = true;
    this.sliderService.putIcerikGuncelle(this.sliderIcerik.id, this.sliderIcerik)
      .subscribe(d => {
        this.sliderIcerik = d;
      });
  }
  setEditedValue(valueChangedEventArg) {
    this.sliderIcerik.icerik = valueChangedEventArg.value;
  }
  drop(e: CdkDragDrop<any[]>) {
    moveItemInArray(this.resimler, e.previousIndex, e.currentIndex);
  }
  resimYuklendi(e) {
    this.resimler.push({ imgURL: e.imgURL, resimAciklama: '', resimBaslik: '', file: e.file, progress: 0 })
  }
  save() {
    if (this.resimler.length === 0) {
      return;
    }
    for (let index = 0; index < this.resimler.length; index++) {
      const resim = this.resimler[index];
      if (!resim.id) {

        let formData: FormData = new FormData();
        formData.append('file', resim.file, resim.file.name);
        formData.append('resimAciklama', resim.resimAciklama);
        formData.append('baslik', resim.baslik);
        formData.append('resimSira', index.toString());
        this.sliderService.post(null, index, resim.resimAciklama, resim.baslik, null, null, { fileName: resim.file.name, data: resim.file }).subscribe(event => {
          const result = event;
          resim.id = result.id;
          // resim.fullUrl = result.fullUrl;
        });
      } else {
        let slider = this.originalResimler.find(p => p.id === resim.id);
        this.sliderService.put(slider.id, slider)
          .subscribe(res => {

          });
      }
    }
  }
}