import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IhaleTeklifDTO, AracService, IhaleAracServiceExtended, IhaleTeklifServiceExtended, UyeBilgiService, KullaniciService, UyeBilgiServiceExtended } from '@zyazilim/online-ihale-data';
import { IhaleTeklifExtendedDTO } from '../../../ihale/models/ihale-teklif-model';
@Component({
  selector: 'arac-teklif-listesi',
  templateUrl: './arac-teklif-listesi.component.html',
  styleUrls: ['./arac-teklif-listesi.component.scss']
})
export class AracTeklifListesiComponent extends BaseListComponent<IhaleTeklifDTO> implements OnInit {
  @Input() aracId: string;
  columns: any[];
  constructor(
    private aracService: AracService,
    private ihaleService: IhaleAracServiceExtended,    
    private uyeBilgiService: UyeBilgiServiceExtended,
    private cd: ChangeDetectorRef,
    private ihaleTeklifServiceExtended: IhaleTeklifServiceExtended) {
    super(aracService, IhaleTeklifDTO);
    this.columns = IhaleTeklifExtendedDTO.columnDefs(uyeBilgiService);

  }
  ngOnInit() {
    super.ngOnInit();
    this.ihaleTeklifServiceExtended.teklifYapildi()
      .subscribe(d => {
        console.log(d)
        this.dataSource.push([{ type: 'insert', key: d.id, data: d }]);
        this.cd.detectChanges();
      });
  }
  getList() {
    return this.aracService.getTeklifler(this.aracId)
  }
}
