import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AracListesiComponent } from './arac/arac-listesi/arac-listesi.component';
import { MarkaListesiComponent } from './marka/marka-listesi/marka-listesi.component';
import { AracEkleComponent } from './arac/arac-ekle/arac-ekle.component';
import { AracDetayComponent } from './arac/arac-detay/arac-detay.component';
import { AracComponent } from './arac/arac.component';
import { AracGuncelleComponent } from './arac/arac-guncelle/arac-guncelle.component';
import { ModelListesiComponent } from './model/model-listesi/model-listesi.component';
import { RuhsatSahibiListesiComponent } from './ruhsat-sahibi/ruhsat-sahibi-listesi/ruhsat-sahibi-listesi.component';
import { LokasyonListesiComponent } from './lokasyon/lokasyon-listesi/lokasyon-listesi.component';
import { RenkListesiComponent } from './renk/renk-listesi/renk-listesi.component';
import { AracVersiyonListesiComponent } from './arac-versiyon/arac-versiyon-listesi/arac-versiyon-listesi.component';
import { AracTopluYukleComponent } from './arac/arac-toplu-yukle/arac-toplu-yukle.component';
import { DonanimListesiComponent } from './donanim/donanim-listesi/donanim-listesi.component';
import { RuhsatSahibiComponent } from './ruhsat-sahibi/ruhsat-sahibi.component';
import { RuhsatSahibiDetayComponent } from './ruhsat-sahibi/ruhsat-sahibi-detay/ruhsat-sahibi-detay.component';

const routes: Routes = [
  {
    path: '',
    component: AracComponent,
    children: [
      {
        path: 'ekle',
        component: AracEkleComponent
      },
      {
        path: 'liste',
        component: AracListesiComponent
      },
      {
        path: 'toplu-yukle',
        component: AracTopluYukleComponent
      },
      {
        path: ':id/detay',
        component: AracDetayComponent
      },
      {
        path: ':id/guncelle',
        component: AracGuncelleComponent
      }
    ]
  },
  {
    path: 'marka-listesi',
    component: MarkaListesiComponent
  },
  {
    path: 'arac-versiyon-listesi',
    component: AracVersiyonListesiComponent
  },
  {
    path: 'model-listesi',
    component: ModelListesiComponent
  },
  {
    path: 'ruhsat-sahibi',
    component: RuhsatSahibiComponent,
    children: [
      {
        path: 'liste',
        component: RuhsatSahibiListesiComponent
      },
      {
        path: ':id/detay',
        component: RuhsatSahibiDetayComponent
      }
    ]
  },
  {
    path: 'ruhsat-sahibi-listesi',
    component: RuhsatSahibiListesiComponent
  },
  {
    path: 'lokasyon-listesi',
    component: LokasyonListesiComponent
  },
  {
    path: 'renk-listesi',
    component: RenkListesiComponent
  },
  {
    path: 'donanim-listesi',
    component: DonanimListesiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AracRoutingModule { }
