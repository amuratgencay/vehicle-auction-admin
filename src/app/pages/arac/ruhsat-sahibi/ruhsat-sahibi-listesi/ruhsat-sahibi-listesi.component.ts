import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { RuhsatSahibiExtendedDTO } from '@ikinciel/arac/ruhsat-sahibi/ruhsat-sahibi-model';
import { RuhsatSahibiDTO, RuhsatSahibiService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'ruhsat-sahibi-listesi',
  templateUrl: './ruhsat-sahibi-listesi.component.html',
  styleUrls: ['./ruhsat-sahibi-listesi.component.scss']
})
export class RuhsatSahibiListesiComponent extends BaseListComponent<RuhsatSahibiDTO> implements OnInit {
  columns: any[];
  constructor(service: RuhsatSahibiService) {
    super(service, RuhsatSahibiDTO);
    this.columns = RuhsatSahibiExtendedDTO.columnDefs();
  }
}
