import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'arac',
      loadChildren: () => import('./arac/arac.module').then(m => m.AracModule),
    },
    {
      path: 'ihale',
      loadChildren: () => import('./ihale/ihale.module').then(m => m.IhaleModule),
    },
    {
      path: 'tanimlamalar',
      loadChildren: () => import('./tanimlamalar/tanimlamalar.module').then(m => m.TanimlamalarModule),
    },
    {

      path: 'raporlar',
      loadChildren: () => import('./raporlar/raporlar.module').then(m => m.RaporlarModule),
    },
    {
      path: 'sistem-yonetimi',
      loadChildren: () => import('./sistem-yonetimi/sistem-yonetimi.module').then(m => m.SistemYonetimiModule),
    },
    {
      path: 'icerik-yonetimi',
      loadChildren: () => import('./icerik-yonetimi/icerik-yonetimi.module').then(m => m.IcerikYonetimiModule),
    },
    {
      path: 'uye-bilgi',
      loadChildren: () => import('./uye-bilgi/uye-bilgi.module').then(m => m.UyeBilgiModule),
    },
    {
      path: '',
      redirectTo: 'raporlar',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
