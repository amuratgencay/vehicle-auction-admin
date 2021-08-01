import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { EpostaSablonlariDTO, EpostaSablonlariService } from '@zyazilim/online-ihale-data';
import { EpostaSablonlariExtendedDTO } from '../eposta-sablonlari-model';

@Component({
  selector: 'eposta-sablonlari-listesi',
  templateUrl: './eposta-sablonlari-listesi.component.html',
  styleUrls: ['./eposta-sablonlari-listesi.component.scss']
})
export class EpostaSablonlariListesiComponent extends BaseListComponent<EpostaSablonlariDTO> implements OnInit {
  eposta: string;
  columns: any[];
  constructor(service: EpostaSablonlariService) {
    super(service, EpostaSablonlariDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = EpostaSablonlariExtendedDTO.columnDefs();
  }
  setEditedValue(valueChangedEventArg, cellInfo) {
    cellInfo.setValue(valueChangedEventArg.value);
  }
}
