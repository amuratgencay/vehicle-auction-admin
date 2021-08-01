import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService } from './utils';
import { SecurityModule } from '@ikinciel/security/security.module';
import { PermissionProvider } from '@ikinciel/security/abstract/permission-provider';
import { AuthService } from './data/auth.service';
import { AutoLogoutService } from './utils/auto-logout.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDateParserFormatter, NgbDateAdapter, NgbDateNativeUTCAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './utils/utils.service';

const DATA_SERVICES = [
  AutoLogoutService,
];


export const NB_CORE_PROVIDERS = [

  ...DATA_SERVICES,
  SecurityModule.forRoot().providers,
  {
    provide: PermissionProvider, useClass: AuthService,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [

  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter },
      ],
    };
  }
}
