import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaporlarRoutingModule } from './raporlar-routing.module';
import { IhaleSatisComponent } from './ihale-satis/ihale-satis.component';
import { UyeDurumuComponent } from './uye-durumu/uye-durumu.component';
import { DxDataGridModule, DxPieChartModule } from 'devextreme-angular';
import { SiteRaporlariComponent } from './site-raporlari/site-raporlari.component';
import { UyeTipiDeigisimRaporuComponent } from './uye-tipi-deigisim-raporu/uye-tipi-deigisim-raporu.component';
import { TeminatRaporuComponent } from './teminat-raporu/teminat-raporu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbCardModule } from '@nebular/theme';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IhaleSatisComponent, UyeDurumuComponent, SiteRaporlariComponent, UyeTipiDeigisimRaporuComponent,
    TeminatRaporuComponent, DashboardComponent],
  imports: [
    CommonModule,
    RaporlarRoutingModule,
    DxDataGridModule,
    DxPieChartModule,
    NbCardModule,
    ComponentsModule
  ]
})
export class RaporlarModule { }
