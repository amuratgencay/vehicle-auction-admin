import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AracParcaComponent } from './arac-parca/arac-parca.component';
import { AracParcaListesiComponent } from './arac-parca/arac-parca-listesi/arac-parca-listesi.component';

const routes: Routes = [
  {
    path: 'arac-parca',
    component: AracParcaComponent,
    children: [
      {
        path: 'liste',
        component: AracParcaListesiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }
