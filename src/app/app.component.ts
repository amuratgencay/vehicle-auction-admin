/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { devextr } from 'assets/i18n/devex-tr';
import { loadMessages, locale } from 'devextreme/localization';
import { AutoLogoutService } from './@core/utils/auto-logout.service';
import config from 'devextreme/core/config';
import dxDataGrid from 'devextreme/ui/data_grid';
import { NbIconLibraries } from '@nebular/theme';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private autoLogout: AutoLogoutService,
    translate: TranslateService,
    private iconLibraries: NbIconLibraries) {
    translate.setDefaultLang('tr');
    this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('font-awesome-5', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('font-awesome-5');
    loadMessages(devextr);
    locale('tr-TR');
    config({ defaultCurrency: 'TRY', decimalSeparator: ',', thousandsSeparator: '.' });
    dxDataGrid.defaultOptions({
      options: {

        // Here go the DataGrid options
        pager: {
          showPageSizeSelector: true,
          allowedPageSizes: [5, 10, 15, 20, 50],
          showInfo: true,
        },
      },

    });
  }

  ngOnInit() {
  }
}
