import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { SistemAyarlariDTO, SistemAyarlariService } from '@zyazilim/online-ihale-data';
import { SistemAyarlariExtendedDTO } from '../sistem-ayarlari-model';

@Component({
  selector: 'sistem-ayarlari-listesi',
  templateUrl: './sistem-ayarlari-listesi.component.html',
  styleUrls: ['./sistem-ayarlari-listesi.component.scss']
})
export class SistemAyarlariListesiComponent extends BaseListComponent<SistemAyarlariDTO> implements OnInit {
  columns: any[];
  constructor(service: SistemAyarlariService) {
    super(service, SistemAyarlariDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = SistemAyarlariExtendedDTO.columnDefs();
  }
}
