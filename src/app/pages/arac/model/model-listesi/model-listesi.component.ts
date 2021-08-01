import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { MarkaService, ModelService, ModelDTO } from '@zyazilim/online-ihale-data';
import { ModelExtendedDTO } from '../model-model';

@Component({
  selector: 'model-listesi',
  templateUrl: './model-listesi.component.html',
  styleUrls: ['./model-listesi.component.scss'],
})
export class ModelListesiComponent extends BaseListComponent<ModelDTO> implements OnInit {
  data: ModelDTO[];
  columns: any[];
  constructor(service: ModelService,
    private markaservice: MarkaService) {
    super(service, ModelDTO);
    this.columns = ModelExtendedDTO.columnDefs(this.markaservice);
  }
}
