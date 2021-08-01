import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IhaleTeklifDTO, UyeBilgiService } from '@zyazilim/online-ihale-data';
import { IhaleTeklifExtendedDTO } from '../../../ihale/models/ihale-teklif-model';
@Component({
  selector: 'uye-teklif-listesi',
  templateUrl: './uye-teklif-listesi.component.html',
  styleUrls: ['./uye-teklif-listesi.component.scss'],
})
export class UyeTeklifListesiComponent extends BaseListComponent<IhaleTeklifDTO> {
  @Input() uyeBilgiId: string;
  columns: any[];
  constructor(private _service: UyeBilgiService,
    private uyeBilgiService: UyeBilgiService,
    private activatedRoute: ActivatedRoute) {
    super(_service, IhaleTeklifDTO);
    this.columns = IhaleTeklifExtendedDTO.columnDefs(uyeBilgiService);
  }
  getList(odataQs: string = '') {
    return this._service.getTeklifler(this.uyeBilgiId)
  }
}
