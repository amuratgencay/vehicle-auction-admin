import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent, // <---
            },
            {
                path: 'logout',
                component: LogoutComponent, // <---
            },
            {
                path: 'register',
                component: RegisterComponent, // <---
            },
            {
                path: 'request-password',
                component: RequestPasswordComponent, // <---
            },
            {
                path: 'reset-password/:code',
                component: ResetPasswordComponent, // <---
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
