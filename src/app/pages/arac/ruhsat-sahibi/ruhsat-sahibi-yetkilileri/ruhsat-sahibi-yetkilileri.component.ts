import { Component, Input } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { RuhsatSahibiYetkiliDTO, RuhsatSahibiYetkiliService, RuhsatSahibiService, UyeBilgiService } from '@zyazilim/online-ihale-data';
import { RuhsatSahibiYetkiliExtendedDTO } from '../../../uye-bilgi/models/ruhsat-sahibi-yetkili-model';

@Component({
  selector: 'ruhsat-sahibi-yetkilileri',
  templateUrl: './ruhsat-sahibi-yetkilileri.component.html',
  styleUrls: ['./ruhsat-sahibi-yetkilileri.component.scss']
})
export class RuhsatSahibiYetkilileriComponent extends BaseListComponent<RuhsatSahibiYetkiliDTO> {
  @Input() ruhsatSahibiId: number;
  columns: any[];
  constructor(
    _service: RuhsatSahibiYetkiliService,
    private ruhsatSahibiService: RuhsatSahibiService,
    uyeBilgiService: UyeBilgiService) {
    super(_service, RuhsatSahibiYetkiliDTO);
    this.columns = RuhsatSahibiYetkiliExtendedDTO.columnDefs(uyeBilgiService, ruhsatSahibiService);
  }
  getList(odataQs: string = '') {
    return this.ruhsatSahibiService.getYetkilileri(this.ruhsatSahibiId);
  }
  onInitNewRow(e) {
    (<RuhsatSahibiYetkiliDTO>e.data).ruhsatSahibiId = this.ruhsatSahibiId;
  }
}
