import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { AracService } from '@zyazilim/online-ihale-data';
import { saveAs as importedSaveAs } from 'file-saver';

@Component({
  selector: 'arac-toplu-yukle',
  templateUrl: './arac-toplu-yukle.component.html',
  styleUrls: ['./arac-toplu-yukle.component.scss'],
})
export class AracTopluYukleComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput: ElementRef;
  topluAracYukleFile: File;
  topuYukleProgress: number;
  yukleniyor: boolean;
  topluYukleSonucu: any;
  constructor(private _service: AracService) { }

  ngOnInit() {
  }
  dosyaYuklendi(e: FileList) {
    this.topluAracYukleFile = e[0];
  }
  dosyaSil() {
    this.topluAracYukleFile = null;
    this.fileInput.nativeElement.value = '';
  }
  yukle(e) {
    const formData = new FormData();
    this.yukleniyor = true;
    formData.append('file', this.topluAracYukleFile, this.topluAracYukleFile.name);
    this._service.postTopluYukle({ data: this.topluAracYukleFile, fileName: this.topluAracYukleFile.name })
      .subscribe(event => {
        this.topuYukleProgress = 100;
        this.topluYukleSonucu = event;
        this.yukleniyor = false;
      });
  }
  sablonIndir() {
    this._service.getSablonIndir()
    .subscribe(d=>{
      importedSaveAs(d.data, 'Sablon.xlsx');
      
    })
  }
}
