import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IhaleAracListeExtendedDTO } from '@ikinciel/arac/models/ihale-arac-model';
import { IhaleAracListeDTO, IhaleBilgisiListeDTO, EnumValue, AracService, IhaleAracService, EnumsService, IhaleBilgisiService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'arac-ihale-gecmisi',
  templateUrl: './arac-ihale-gecmisi.component.html',
  styleUrls: ['./arac-ihale-gecmisi.component.scss']
})
export class AracIhaleGecmisiComponent extends BaseListComponent<IhaleAracListeDTO> implements OnInit {
  @Input() aracId: string;
  data: IhaleAracListeDTO[];
  ihaleAracDurumlari: EnumValue[];
  ihaleler: IhaleBilgisiListeDTO[];
  columns: any[];
  constructor(service: IhaleAracService,
    private aracService: AracService,
    enumsService: EnumsService,
    ihaleService: IhaleBilgisiService) {
    super(service, IhaleAracListeDTO);
    enumsService.getIhaleAracDurumlari()
      .subscribe(data => this.ihaleAracDurumlari = data);
    ihaleService.getAll()
      .subscribe(data => this.ihaleler = data);
    this.columns = IhaleAracListeExtendedDTO.columnDefs(enumsService, ihaleService);
  }
  getList(odataQs: string = '') {
    return this.aracService.getIhaleGecmisi(this.aracId);
      
  }
}