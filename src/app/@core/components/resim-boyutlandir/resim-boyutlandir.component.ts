import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'resim-boyutlandir',
  templateUrl: './resim-boyutlandir.component.html',
  styleUrls: ['./resim-boyutlandir.component.scss']
})
export class ResimBoyutlandirComponent implements OnInit, OnChanges {
  @Input() resimler: FileList;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImages = []
  constructor() { }

  ngOnInit() {
    console.log(this.resimler)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent, index) {
    this.croppedImage = event.base64;
    this.croppedImages[index] = event.file;
  }
  imageLoaded(index) {
    // show cropper
  }
  cropperReady(index) {
    // cropper ready
  }
  loadImageFailed(index) {
    // show message
  }
  tamam(e) {
    console.log(this.croppedImages)
  }
}
