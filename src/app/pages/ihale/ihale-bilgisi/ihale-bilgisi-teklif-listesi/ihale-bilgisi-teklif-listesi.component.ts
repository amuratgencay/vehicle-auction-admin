import { Component, OnInit, Input } from '@angular/core';
import { IhaleTeklifExtendedDTO } from '../../models/ihale-teklif-model';
import ArrayStore from 'devextreme/data/array_store';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IhaleTeklifDTO, IhaleBilgisiService, IhaleTeklifServiceExtended, UyeBilgiService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'ihale-bilgisi-teklif-listesi',
  templateUrl: './ihale-bilgisi-teklif-listesi.component.html',
  styleUrls: ['./ihale-bilgisi-teklif-listesi.component.scss'],
})
export class IhaleBilgisiTeklifListesiComponent extends BaseListComponent<IhaleTeklifDTO> implements OnInit {
  @Input() ihaleBilgisiId: string;
  store: ArrayStore;
  columns: any[];
  constructor(
    private ihaleService: IhaleBilgisiService,
    private uyeBilgiService: UyeBilgiService,
    private ihaleTeklifService: IhaleTeklifServiceExtended) {
    super(ihaleService, IhaleTeklifDTO);
    this.columns = IhaleTeklifExtendedDTO.columnDefs(uyeBilgiService);
    this.ihaleTeklifService.teklifYapildi()
      .subscribe(data => {
      })
  }
  getList(odataQs: string = '') {
    return this.ihaleService.getTeklifler(this.ihaleBilgisiId)
  }
}
