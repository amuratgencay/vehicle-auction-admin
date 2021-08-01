import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { KullaniciRolDTO, RolService, KullaniciService, KullaniciRolService, RolDTO, KullaniciDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'rol-kullanici-listesi',
  templateUrl: './rol-kullanici-listesi.component.html',
  styleUrls: ['./rol-kullanici-listesi.component.scss']
})
export class RolKullaniciListesiComponent extends BaseListComponent<KullaniciRolDTO> {
  @Input() rolId: number;
  @Input() kullaniciId: string;
  roller: RolDTO[];
  kullanicilar: KullaniciDTO[];
  constructor(service: KullaniciRolService,
    private kullaniciService: KullaniciService,
    private rolService: RolService) {
    super(service, KullaniciRolDTO);
    kullaniciService.getAll()
      .subscribe(data => this.kullanicilar = data);
    rolService.getAll()
      .subscribe(data => {
        this.roller = data;
      });
  }
  getList() {
    if (this.rolId) {
      return this.rolService.getKullanicilar(this.rolId);
    } else if (this.kullaniciId) {
      return this.kullaniciService.getRoller(this.kullaniciId);
    }

  }
  onInitNewRow(e) {
    (<KullaniciRolDTO>e.data).rolId = this.rolId;
    (<KullaniciRolDTO>e.data).kullaniciId = this.kullaniciId;
  }
}