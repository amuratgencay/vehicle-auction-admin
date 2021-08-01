import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { DxTemplateHost } from 'devextreme-angular';
import { KullaniciDTO, KullaniciService } from '@zyazilim/online-ihale-data';
import { KullaniciExtendedDTO } from '../kullanici-model';

@Component({
  selector: 'kullanici-listesi',
  templateUrl: './kullanici-listesi.component.html',
  styleUrls: ['./kullanici-listesi.component.scss'],
  providers: [DxTemplateHost],
})
export class KullaniciListesiComponent extends BaseListComponent<KullaniciDTO> implements OnInit {
  columns: any[];
  constructor(service: KullaniciService) {
    super(service, KullaniciDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = KullaniciExtendedDTO.columnDefs();
  }
}
