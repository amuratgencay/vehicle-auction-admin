import { Component, OnInit } from '@angular/core';
import { AracVersiyonService, AracVersionDTO, MarkaDTO, ModelDTO, ModelService } from '@zyazilim/online-ihale-data';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { AracVersiyonExtendedDTO } from '../arac-versiyon-model';


@Component({
  selector: 'arac-versiyon-listesi',
  templateUrl: './arac-versiyon-listesi.component.html',
  styleUrls: ['./arac-versiyon-listesi.component.scss'],
})
export class AracVersiyonListesiComponent extends BaseListComponent<AracVersionDTO> implements OnInit {
  data: AracVersionDTO[];
  markalar: MarkaDTO[];
  modeller: ModelDTO[];
  columns: any[];
  constructor(service: AracVersiyonService,
    private modelService: ModelService) {
    super(service, AracVersionDTO);
    this.columns = AracVersiyonExtendedDTO.columnDefs(modelService);
  }
}
