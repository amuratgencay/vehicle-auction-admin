import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirmaBilgileriComponent } from './firma-bilgileri/firma-bilgileri.component';
import { SozlesmelerComponent } from './sozlesmeler/sozlesmeler.component';
import { SliderResimleriComponent } from './slider-resimleri/slider-resimleri.component';
import { IcerikKategorisiComponent } from './icerik-kategorisi/icerik-kategorisi.component';
import { IcerikComponent } from './icerik/icerik.component';

const routes: Routes = [
  {
    path: 'icerik-kategorisi',
    component: IcerikKategorisiComponent,
  },
  {
    path: 'icerik',
    component: IcerikComponent,
  },
  {
    path: 'firma-bilgileri',
    component: FirmaBilgileriComponent
  },
  {
    path: 'sozlesmeler',
    component: SozlesmelerComponent
  },
  {
    path: 'slider-resimleri',
    component: SliderResimleriComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcerikYonetimiRoutingModule { }
