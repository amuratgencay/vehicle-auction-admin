import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { AracParcaExtendedDTO } from '../arac-parca-model';
import { AracParcaDTO, AracParcaService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'arac-parca-listesi',
  templateUrl: './arac-parca-listesi.component.html',
  styleUrls: ['./arac-parca-listesi.component.scss']
})
export class AracParcaListesiComponent extends BaseListComponent<AracParcaDTO> implements OnInit {
  columns: any[];
  constructor(service: AracParcaService) {
    super(service, AracParcaDTO);
    this.columns = AracParcaExtendedDTO.columnDefs()
  }
}
