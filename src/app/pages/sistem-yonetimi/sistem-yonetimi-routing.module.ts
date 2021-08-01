import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KullaniciListesiComponent } from './kullanici/kullanici-listesi/kullanici-listesi.component';
import { RoleListesiComponent } from './rol/role-listesi/role-listesi.component';
import { RolComponent } from './rol/rol.component';
import { RoleDetayComponent } from './rol/role-detay/role-detay.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { KullaniciDetayComponent } from './kullanici/kullanici-detay/kullanici-detay.component';
import { EpostaSablonlariListesiComponent } from './eposta-sablonlari/eposta-sablonlari-listesi/eposta-sablonlari-listesi.component';
import { SistemAyarlariListesiComponent } from './sistem-ayarlari/sistem-ayarlari-listesi/sistem-ayarlari-listesi.component';
import { SehirListesiComponent } from './sehir/sehir-listesi/sehir-listesi.component';
import { SehirComponent } from './sehir/sehir.component';
import { YetkiComponent } from './yetki-tanimlari/yetki.component';
import { YetkiListesiComponent } from './yetki-tanimlari/yetki-listesi/yetki-listesi.component';
import { YetkiDetayComponent } from './yetki-tanimlari/yetki-detay/yetki-detay.component';

const routes: Routes = [
  {
    path: 'eposta-listesi',
    component: EpostaSablonlariListesiComponent
  },
  {
    path: 'sistem-ayarlari',
    component: SistemAyarlariListesiComponent
  },
  {
    path: 'rol',
    component: RolComponent,
    children: [{
      path: 'liste',
      component: RoleListesiComponent
    },
    {
      path: ':id/detay',
      component: RoleDetayComponent
    }]
  },
  {
    path: 'yetki',
    component: YetkiComponent,
    children: [{
      path: 'liste',
      component: YetkiListesiComponent
    },
    {
      path: ':id/detay',
      component: YetkiDetayComponent
    }]
  },
  {
    path: 'sehir',
    component: SehirComponent,
    children: [{
      path: 'liste',
      component: SehirListesiComponent
    }
    ]
  },
  {
    path: 'kullanici',
    component: KullaniciComponent,
    children: [{
      path: 'liste',
      component: KullaniciListesiComponent
    },
    {
      path: ':id/detay',
      component: KullaniciDetayComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemYonetimiRoutingModule { }
