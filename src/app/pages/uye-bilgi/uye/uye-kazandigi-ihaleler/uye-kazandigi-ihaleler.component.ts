import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { ActivatedRoute } from '@angular/router';
import { IhaleAracListeDTO, IhaleBilgisiService, UyeBilgiService, EnumsService } from '@zyazilim/online-ihale-data';
import { IhaleAracListeExtendedDTO } from '../../../arac/models/ihale-arac-model';

@Component({
  selector: 'uye-kazandigi-ihaleler',
  templateUrl: './uye-kazandigi-ihaleler.component.html',
  styleUrls: ['./uye-kazandigi-ihaleler.component.scss']
})
export class UyeKazandigiIhalelerComponent extends BaseListComponent<IhaleAracListeDTO> {
  @Input() uyeBilgiId: string;
  columns: any[];
  constructor(private _service: UyeBilgiService,
    private activatedRoute: ActivatedRoute,
    private ihaleBilgisiService: IhaleBilgisiService,
    private enumsService: EnumsService) {
    super(_service, IhaleAracListeDTO);
    this.columns = IhaleAracListeExtendedDTO.columnDefs(enumsService, ihaleBilgisiService);
  }
  getList(odataQs: string = '') {
    return this._service.getKazandigimIhaleler(this.uyeBilgiId);
  }
}
