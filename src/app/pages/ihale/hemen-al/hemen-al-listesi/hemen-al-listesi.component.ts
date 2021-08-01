import { Component, OnInit } from '@angular/core';
import { HemenAlListeExtendedDTO } from '../hemen-al-model';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { Router } from '@angular/router';
import { HemenAlService, HemenAlListeDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'hemen-al-listesi',
  templateUrl: './hemen-al-listesi.component.html',
  styleUrls: ['./hemen-al-listesi.component.scss']
})
export class HemenAlListesiComponent extends BaseListComponent<HemenAlListeDTO> implements OnInit {
  columns: any[];
  constructor(service: HemenAlService,
    private router: Router) {
    super(service, HemenAlListeDTO);
    this.columns = HemenAlListeExtendedDTO.columnDefs();
  }
  create(e) {
    this.service.post(e.data)
      .subscribe(res => {
        this.router.navigate(['/pages', 'ihale', 'hemen-al', res.id, 'detay']);
      })
  }
  onInitNewRow(e) {
    (<HemenAlListeDTO>e.data).yayinTarihi = new Date();
  }
}