import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IhaleBilgisiListesiComponent } from './ihale-bilgisi/ihale-bilgisi-listesi/ihale-bilgisi-listesi.component';
import { IhaleBilgisiDetayComponent } from './ihale-bilgisi/ihale-bilgisi-detay/ihale-bilgisi-detay.component';
import { HemenAlListesiComponent } from './hemen-al/hemen-al-listesi/hemen-al-listesi.component';
import { HemenAlDetayComponent } from './hemen-al/hemen-al-detay/hemen-al-detay.component';
import { CanliIhaleComponent } from './canli-ihale/canli-ihale.component';
const routes: Routes = [
  {
    path: 'ihale-listesi',
    component: IhaleBilgisiListesiComponent,
  },
  {
    path: 'canli-ihale',
    component: CanliIhaleComponent,
  },
  {
    path: ':id/detay',
    component: IhaleBilgisiDetayComponent,
  },
  {
    path: 'hemen-al-listesi',
    component: HemenAlListesiComponent,
  },
  {
    path: 'hemen-al/:id/detay',
    component: HemenAlDetayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IhaleRoutingModule { }
