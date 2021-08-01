import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { RenkDTO, RenkService } from '@zyazilim/online-ihale-data';
import { RenkExtendedDTO } from '../renk-model';

@Component({
  selector: 'renk-listesi',
  templateUrl: './renk-listesi.component.html',
  styleUrls: ['./renk-listesi.component.scss']
})
export class RenkListesiComponent extends BaseListComponent<RenkDTO> implements OnInit {
  columns: any[];
  constructor(service: RenkService) {
    super(service, RenkDTO);
    this.columns = RenkExtendedDTO.columnDefs();
  }
}
