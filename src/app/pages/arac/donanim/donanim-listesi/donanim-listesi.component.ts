import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { DonanimService, DonanimDTO } from '@zyazilim/online-ihale-data';
import { DonanimExtendedDTO } from '../donanim-model';

@Component({
  selector: 'donanim-listesi',
  templateUrl: './donanim-listesi.component.html',
  styleUrls: ['./donanim-listesi.component.scss']
})
export class DonanimListesiComponent extends BaseListComponent<DonanimDTO> implements OnInit {
  data: DonanimDTO[];
  columns: any[];
  constructor(service: DonanimService) {
    super(service, DonanimDTO);
    this.columns = DonanimExtendedDTO.columnDefs();
  }
}
