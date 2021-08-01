import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { MarkaDTO, MarkaService } from '@zyazilim/online-ihale-data';
import { MarkaExtendedDTO } from '../marka-model';
@Component({
  selector: 'marka-listesi',
  templateUrl: './marka-listesi.component.html',
  styleUrls: ['./marka-listesi.component.scss']
})
export class MarkaListesiComponent extends BaseListComponent<MarkaDTO> implements OnInit {
  data: MarkaDTO[];
  columns: any[];
  constructor(service: MarkaService) {
    super(service, MarkaDTO);
    this.columns = MarkaExtendedDTO.columnDefs();
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
  }
}
