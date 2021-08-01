import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbLayoutModule, NbThemeModule, NbCardModule
} from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { AuthComponent } from './auth.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { DxTextBoxModule, DxButtonModule, DxValidatorModule, DxValidationSummaryModule } from 'devextreme-angular';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent,
    RequestPasswordComponent, LogoutComponent, AuthComponent, AuthBlockComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
    NbThemeModule,
    NbCardModule,
    NbLayoutModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxValidationSummaryModule
  ]
})
export class AuthModule { }
