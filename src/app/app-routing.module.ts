import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  NbAuthModule,
} from '@nebular/auth';
import { NbSecurityModule } from '@nebular/security';
import { AdminGuard } from './security/guards/admin.guard';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AdminGuard],
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config), NbAuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
