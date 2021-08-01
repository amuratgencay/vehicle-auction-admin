import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { ThemeModule } from '@ikinciel/theme/theme.module';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    UploadFileComponent
  ]
})
export class UploadFileModule { }
