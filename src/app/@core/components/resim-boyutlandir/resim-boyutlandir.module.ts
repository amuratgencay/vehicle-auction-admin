import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResimBoyutlandirComponent } from './resim-boyutlandir.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [ResimBoyutlandirComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    DxButtonModule
  ],
  exports: [ResimBoyutlandirComponent]
})
export class ResimBoyutlandirModule { }
