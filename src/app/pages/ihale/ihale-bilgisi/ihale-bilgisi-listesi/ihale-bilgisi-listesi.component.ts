import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { Router } from '@angular/router';
import { IhaleBilgisiListeDTO, IhaleBilgisiService, EnumsService, EnumValue } from '@zyazilim/online-ihale-data';
import { IhaleBilgisiListeExtendedDTO } from '../ihale-bilgisi-model';

@Component({
  selector: 'ihale-bilgisi-listesi',
  templateUrl: './ihale-bilgisi-listesi.component.html',
  styleUrls: ['./ihale-bilgisi-listesi.component.scss']
})
export class IhaleBilgisiListesiComponent extends BaseListComponent<IhaleBilgisiListeDTO> implements OnInit {
  columns: any[];
  ihaleTipleri: EnumValue[];
  constructor(service: IhaleBilgisiService,
    enumsService: EnumsService,
    private router: Router) {
    super(service, IhaleBilgisiListeDTO);
    enumsService.getIhaleTipleri()
      .subscribe(data => this.ihaleTipleri = data);
    this.columns = IhaleBilgisiListeExtendedDTO.columnDefs(enumsService);
  }
  create(e) {
    this.service.post(e.data)
      .subscribe(res => {
        this.router.navigate(['/pages', 'ihale', res.id, 'detay']);
      })
  }
  onInitNewRow(e) {
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton1 = 100;
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton2 = 200;
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton3 = 500;
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton4 = 1000;
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton5 = 2000;
    (<IhaleBilgisiListeDTO>e.data).teklifArtisButton6 = 5000;
    (<IhaleBilgisiListeDTO>e.data).teklifSuresi = 30;
    (<IhaleBilgisiListeDTO>e.data).uzatmaSuresi = 10;
    (<IhaleBilgisiListeDTO>e.data).gecisSuresi = 5;
    (<IhaleBilgisiListeDTO>e.data).durum = true;
    (<IhaleBilgisiListeDTO>e.data).ihaleTipi = this.ihaleTipleri[0].value;
    (<IhaleBilgisiListeDTO>e.data).yayinTarihi = new Date();
  }
}