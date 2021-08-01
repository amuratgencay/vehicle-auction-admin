import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { DxDataGridModule, DxHtmlEditorModule } from 'devextreme-angular';
import { NbCardModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { KullaniciDetailLinkComponent } from './kullanici-detail-link/kullanici-detail-link.component';
import { UyeBilgiDetailLinkComponent } from './uye-bilgi-detail-link/uye-bilgi-detail-link.component';
import { RolDetailLinkComponent } from './rol-detail-link/rol-detail-link.component';
import { IhaleDetailLinkComponent } from './ihale-detail-link/ihale-detail-link.component';
import { AracDetailLinkComponent } from './arac-detail-link/arac-detail-link.component';
import { RuhsatSahibiDetailLinkComponent } from './ruhsat-sahibi-detail-link/ruhsat-sahibi-detail-link.component';
import { PipesModule } from '../pipes/pipes.module';
import { HemenAlDetailLinkComponent } from './hemen-al-detail-link/hemen-al-detail-link.component';
import { DokumanIndirLinkComponent } from './dokuman-indir-link/dokuman-indir-link.component';

@NgModule({
  declarations: [DataTableComponent, KullaniciDetailLinkComponent,
    UyeBilgiDetailLinkComponent, RolDetailLinkComponent,
    IhaleDetailLinkComponent, AracDetailLinkComponent, RuhsatSahibiDetailLinkComponent, HemenAlDetailLinkComponent, DokumanIndirLinkComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    NbCardModule,
    RouterModule,
    DxHtmlEditorModule,
    PipesModule,
  ],
  exports: [DataTableComponent,
    KullaniciDetailLinkComponent,
    UyeBilgiDetailLinkComponent, RolDetailLinkComponent,
    IhaleDetailLinkComponent, AracDetailLinkComponent],
})
export class ComponentsModule { }
