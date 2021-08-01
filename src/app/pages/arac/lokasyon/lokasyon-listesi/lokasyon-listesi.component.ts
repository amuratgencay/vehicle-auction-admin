import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { LokasyonDTO, LokasyonService } from '@zyazilim/online-ihale-data';
import { LokasyonExtendedDTO } from '../lokasyon-model';

@Component({
  selector: 'lokasyon-listesi',
  templateUrl: './lokasyon-listesi.component.html',
  styleUrls: ['./lokasyon-listesi.component.scss']
})
export class LokasyonListesiComponent extends BaseListComponent<LokasyonDTO> implements OnInit {
  data: LokasyonDTO[];
  columns: any[];
  constructor(service: LokasyonService) {
    super(service, LokasyonDTO);
    this.columns = LokasyonExtendedDTO.columnDefs();
  }
}
