import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UyeDurumuComponent } from './uye-durumu/uye-durumu.component';
import { SiteRaporlariComponent } from './site-raporlari/site-raporlari.component';
import { UyeTipiDeigisimRaporuComponent } from './uye-tipi-deigisim-raporu/uye-tipi-deigisim-raporu.component';
import { TeminatRaporuComponent } from './teminat-raporu/teminat-raporu.component';
import { IhaleSatisComponent } from './ihale-satis/ihale-satis.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'uye-durumu',
    component: UyeDurumuComponent
  },
  {
    path: 'site-raporlari',
    component: SiteRaporlariComponent
  },
  {
    path: 'uye-tipi-degisim-raporu',
    component: UyeTipiDeigisimRaporuComponent
  },
  {
    path: 'teminat-raporu',
    component: TeminatRaporuComponent
  },
  {
    path: 'ihale-satis',
    component: IhaleSatisComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaporlarRoutingModule { }
