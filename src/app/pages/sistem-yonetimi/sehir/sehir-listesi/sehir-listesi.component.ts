import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { SehirDTO, SehirService } from '@zyazilim/online-ihale-data';
import { SehirExtendedDTO } from '../sehir-model';

@Component({
  selector: 'sehir-listesi',
  templateUrl: './sehir-listesi.component.html',
  styleUrls: ['./sehir-listesi.component.scss']
})
export class SehirListesiComponent extends BaseListComponent<SehirDTO> implements OnInit {
  columns: any[];
  constructor(service: SehirService) {
    super(service, SehirDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = SehirExtendedDTO.columnDefs();
  }
}
