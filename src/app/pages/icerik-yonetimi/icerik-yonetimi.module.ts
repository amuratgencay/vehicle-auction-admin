import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmaBilgileriComponent } from './firma-bilgileri/firma-bilgileri.component';
import { SozlesmelerComponent } from './sozlesmeler/sozlesmeler.component';
import { DxDataGridModule, DxHtmlEditorModule, DxPopupModule } from 'devextreme-angular';
import { IcerikYonetimiRoutingModule } from './icerik-yonetimi-routing.module';
import { SliderResimleriComponent } from './slider-resimleri/slider-resimleri.component';
import { UploadFileModule } from '../../@core/components/upload-file/upload-file.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IcerikKategorisiComponent } from './icerik-kategorisi/icerik-kategorisi.component';
import { ComponentsModule } from 'app/components/components.module';
import { IcerikComponent } from './icerik/icerik.component';

@NgModule({
  declarations: [FirmaBilgileriComponent, SozlesmelerComponent,
    SliderResimleriComponent, IcerikKategorisiComponent, IcerikComponent],
  imports: [
    DxDataGridModule,
    CommonModule,
    IcerikYonetimiRoutingModule,
    DxHtmlEditorModule,
    UploadFileModule,
    DragDropModule,
    ThemeModule,
    FormsModule,
    DxPopupModule,
    ComponentsModule,
  ]
})
export class IcerikYonetimiModule { }
