import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { RolYetkiDTO, YetkiDTO, RolDTO, RolYetkiService, YetkiService, RolService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'rol-yetki-listesi',
  templateUrl: './rol-yetki-listesi.component.html',
  styleUrls: ['./rol-yetki-listesi.component.scss']
})
export class RolYetkiListesiComponent extends BaseListComponent<RolYetkiDTO> {
  @Input() rolId: number;
  @Input() yetkiId: number;
  yetkiler: YetkiDTO[];
  roller: RolDTO[];
  constructor(service: RolYetkiService,
    private yetkiService: YetkiService,
    private rolService: RolService) {
    super(service, RolYetkiDTO);
    yetkiService.getAll()
      .subscribe(data => this.yetkiler = data);
    rolService.getAll()
      .subscribe(data => {
        this.roller = data;
      });
  }
  getList() {
    if (this.rolId) {
      return this.rolService.getYetkiler(this.rolId);
    } else if (this.yetkiId) {
      // return this.yetkiService.(this.yetkiId);
    }

  }
  onInitNewRow(e) {
    (<RolYetkiDTO>e.data).rolId = this.rolId;
    (<RolYetkiDTO>e.data).yetkiId = this.yetkiId;
  }
}
