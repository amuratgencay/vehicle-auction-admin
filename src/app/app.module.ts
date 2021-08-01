/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbThemeModule,
  NbLayoutModule,
  NbToastrModule,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { registerLocaleData, APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import localeTr from '@angular/common/locales/tr';
import { environment } from '../environments/environment';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { ErrorInterceptor, NotifyInterceptor } from './interceptors/notification-intercepter';
import { SecurityModule } from './security/security.module';
import { PermissionProvider } from './security/abstract/permission-provider';
import { AuthServiceExtended, OnlineIhaleDataModule } from '@zyazilim/online-ihale-data';
registerLocaleData(localeTr, 'tr');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'username',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token'
          },
          baseEndpoint: environment.apiUrl,
          login: {
            endpoint: '/auth/login',
          },
          register: {
            endpoint: '/auth/register',
          },
        }),
      ],
      forms: {},
    }),
    OnlineIhaleDataModule.forRoot({
      apiUrl: environment.apiUrl,
      signalrUrl: environment.signalrUrl,
      baseApiUrl: environment.baseApiUrl
    }),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: PermissionProvider, useClass: AuthServiceExtended,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true },
  ],
})
export class AppModule {
}
