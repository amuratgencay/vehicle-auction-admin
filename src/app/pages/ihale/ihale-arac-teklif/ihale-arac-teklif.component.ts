import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { BaseListComponent } from '../../../@core/abstract/base-list.component';
import { IhaleTeklifDTO, AracService, IhaleAracServiceExtended, IhaleTeklifServiceExtended, UyeBilgiService, KullaniciService, IhaleTeklifVerildiDTO } from '@zyazilim/online-ihale-data';
import { IhaleTeklifExtendedDTO } from '../models/ihale-teklif-model';
import { map } from 'rxjs/operators';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'ihale-arac-teklif',
  templateUrl: './ihale-arac-teklif.component.html',
  styleUrls: ['./ihale-arac-teklif.component.scss']
})
export class IhaleAracTeklifComponent extends BaseListComponent<IhaleTeklifDTO> implements OnInit {
  @Input() ihaleAracId: string;
  columns: any[];
  ds: DataSource;
  store: CustomStore;
  constructor(
    private aracService: AracService,
    private uyeBilgiService: UyeBilgiService,
    private ihaleAracService: IhaleAracServiceExtended,
    private cd: ChangeDetectorRef,
    private ihaleTeklifServiceExtended: IhaleTeklifServiceExtended) {
    super(aracService, IhaleTeklifDTO);
    this.columns = [
      {
        key: 'uyeBilgiId',
        name: 'Üye',
        type: 'select',
        editorOptions: {
          // customParams: {
          //     detailKey: 'uyeBilgiId',
          // },
          itemsAsync: uyeBilgiService.getAll(),
          displayExpr: 'tamAd',
          valueExpr: 'id'
        },
        // cellTemplate: 'uyeBilgiDetailLink',
        validators: [{
          type: 'required',
          message: 'Üye zorunludur',
        }],
      },
      {
        key: 'artirimMiktari',
        name: 'Artırım Miktarı',
        type: 'number',
        format: {
          type: 'currency',
        },
        editorOptions: {
          format: {
            type: 'currency',
          },
        },
      },
      {
        key: 'artirimSonrasiFiyat',
        name: 'Artırım Sonrası Fiyat',
        type: 'number',
        format: {
          type: 'currency',
        },
        editorOptions: {
          format: {
            type: 'currency',
          },
        },
      },
      {
        key: 'teklifZamani',
        name: 'Teklif Zamanı',
        type: 'datetime',
        format: 'dd.MM.yyyy HH:mm:ss',
        sortOrder: "desc"
      },
    ];
  }
  ngOnInit() {
    this.store = new CustomStore({
      key: 'id',
      load: () => {
        return this.getList().toPromise();
      },
    })
    this.ds = new DataSource({
      store: this.store,
      reshapeOnPush: true
    });
    this.ihaleTeklifServiceExtended.teklifYapildi()
      .subscribe(d => {
        console.log(d)
        this.store.push([{ type: 'insert', key: d.id, data: d }]);
        this.cd.detectChanges();
        console.log(this.dataSource)
      });
  }
  getList() {
    return this.ihaleAracService.getTeklifler(this.ihaleAracId).pipe(map(m => {
      return m.map(t => {
        return {
          id: t.id,
          uyeBilgiId: t.uyeBilgiId,
          teklifZamani: t.teklifZamani,
          artirimMiktari: t.artirimMiktari,
          artirimSonrasiFiyat: t.artirimSonrasiFiyat
        }
      })
    }));
  }
}