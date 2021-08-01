import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { YetkiDTO, YetkiService } from '@zyazilim/online-ihale-data';
import { YetkiExtendedDTO } from '../yetki-model';

@Component({
  selector: 'yetki-listesi',
  templateUrl: './yetki-listesi.component.html',
  styleUrls: ['./yetki-listesi.component.scss']
})
export class YetkiListesiComponent extends BaseListComponent<YetkiDTO> implements OnInit {
  eposta: string;
  columns: any[];
  constructor(service: YetkiService) {
    super(service, YetkiDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = YetkiExtendedDTO.columnDefs();
  }
}
