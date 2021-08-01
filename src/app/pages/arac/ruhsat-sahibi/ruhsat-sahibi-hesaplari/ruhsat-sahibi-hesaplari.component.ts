import { Component, Input } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { RuhsatSahibiHesapDTO, UyeBilgiService, RuhsatSahibiHesapService, RuhsatSahibiService } from '@zyazilim/online-ihale-data';
import { RuhsatSahibiHesapExtendedDTO } from './ruhsat-sahibi-hesap-model';

@Component({
  selector: 'ruhsat-sahibi-hesaplari',
  templateUrl: './ruhsat-sahibi-hesaplari.component.html',
  styleUrls: ['./ruhsat-sahibi-hesaplari.component.scss']
})
export class RuhsatSahibiHesaplariComponent extends BaseListComponent<RuhsatSahibiHesapDTO> {
  @Input() ruhsatSahibiId: number;
  columns: any[];
  constructor(
    _service: RuhsatSahibiHesapService,
    private ruhsatSahibiService: RuhsatSahibiService,
    uyeBilgiService: UyeBilgiService) {
    super(_service, RuhsatSahibiHesapDTO);
    this.columns = RuhsatSahibiHesapExtendedDTO.columnDefs(uyeBilgiService, ruhsatSahibiService);
  }
  getList(odataQs: string = '') {
    return this.ruhsatSahibiService.getHesaplari(this.ruhsatSahibiId);
  }
  onInitNewRow(e) {
    (<RuhsatSahibiHesapDTO>e.data).ruhsatSahibiId = this.ruhsatSahibiId;
  }
}
