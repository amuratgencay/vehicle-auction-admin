import { Component, OnInit, Input } from '@angular/core';
import { RuhsatSahibiYetkiliDTO, RuhsatSahibiYetkiliService, UyeBilgiService, RuhsatSahibiService } from '@zyazilim/online-ihale-data';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { RuhsatSahibiYetkiliExtendedDTO } from '../../models/ruhsat-sahibi-yetkili-model';

@Component({
  selector: 'uye-bilgi-ruhsat-sahibi-yetkileri',
  templateUrl: './uye-bilgi-ruhsat-sahibi-yetkileri.component.html',
  styleUrls: ['./uye-bilgi-ruhsat-sahibi-yetkileri.component.scss']
})
export class UyeBilgiRuhsatSahibiYetkileriComponent extends BaseListComponent<RuhsatSahibiYetkiliDTO> {
  @Input() uyeBilgiId: string;
  columns: any[];
  constructor(
    private _service: RuhsatSahibiYetkiliService,
    private uyeBilgiService: UyeBilgiService,
    ruhsatSahibiService: RuhsatSahibiService) {
    super(_service, RuhsatSahibiYetkiliDTO);
    this.columns = RuhsatSahibiYetkiliExtendedDTO.columnDefs(uyeBilgiService, ruhsatSahibiService);
  }
  getList(odataQs: string = '') {
    return this.uyeBilgiService.getRuhsatSahibiYetkileri(this.uyeBilgiId);
  }
  onInitNewRow(e) {
    (<RuhsatSahibiYetkiliDTO>e.data).uyeBilgiId = this.uyeBilgiId;
  }
}