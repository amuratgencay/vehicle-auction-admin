import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UyeComponent } from './uye/uye.component';
import { UyeListesiComponent } from './uye/uye-listesi/uye-listesi.component';
import { UyeBilgiDetayComponent } from './uye/uye-bilgi-detay/uye-bilgi-detay.component';
import { ElitUyelikTalepleriComponent } from './uye/elit-uyelik-talepleri/elit-uyelik-talepleri.component';
import { BultenKayitListesiComponent } from './bulten/bulten-kayit-listesi/bulten-kayit-listesi.component';

const routes: Routes = [
  {
    path: "uye",
    component: UyeComponent,
    children: [
      {
        path: "liste",
        component: UyeListesiComponent
      },
      {
        path: ":id/detay",
        component: UyeBilgiDetayComponent
      },
      {
        path: "elit-uyelik-talepleri",
        component: ElitUyelikTalepleriComponent
      },
      {
        path: "bulten-kayitlari",
        component: BultenKayitListesiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UyeBilgiRoutingModule { }
