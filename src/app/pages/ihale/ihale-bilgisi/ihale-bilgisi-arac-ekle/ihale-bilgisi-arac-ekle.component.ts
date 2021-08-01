import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { forkJoin, Observable } from 'rxjs';
import CustomStore from 'devextreme/data/custom_store';
import { IhaleAracService, IhaleBilgisiService, EnumsService, AracService, EnumValue, IhaleAracListeDTO, IhaleAracDurum, IhaleAracEkleDTO } from '@zyazilim/online-ihale-data';
import { IhaleAracListeExtendedDTO } from '../../../arac/models/ihale-arac-model';
@Component({
  selector: 'ihale-bilgisi-arac-ekle',
  templateUrl: './ihale-bilgisi-arac-ekle.component.html',
  styleUrls: ['./ihale-bilgisi-arac-ekle.component.scss']
})
export class IhaleBilgisiAracEkleComponent implements OnInit, AfterViewInit {
  @Input() ihaleBilgisiId: string;
  @Input() ihaleDurum: boolean;
  aramaText: string;
  araclar: Array<IhaleAracListeDTO> = new Array<IhaleAracListeDTO>();
  filtreliAraclar: Array<IhaleAracListeDTO> = new Array<IhaleAracListeDTO>();
  ihaleAraclari: IhaleAracListeDTO[];
  dataSourceMevcut: CustomStore;
  columnsMevcut: any[];
  ihaleAracDurumlari: EnumValue[];
  constructor(private service: IhaleAracService,
    private ihaleService: IhaleBilgisiService,
    private enumsService: EnumsService,
    private aracService: AracService) {

    this.enterPredicate.bind(this);
  }

  ngOnInit() {
    // this.getDataForGrid();
  }
  enterPredicate(drag: CdkDrag<IhaleAracListeDTO>, drop: CdkDropList<IhaleAracListeDTO[]>) {
    return true;
  }
  private getDataForGrid() {
    this.dataSourceMevcut = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: () => {
        return this.getMevcutAraclarList().toPromise();
      },
      insert: (values) => {
        return this.service.post(values).toPromise();
      },
      update: (key, values) => {
        return this.service.put(key, values).toPromise();
      },
      remove: (key) => {
        return this.service.delete(key).toPromise();
      },
    });
    this.columnsMevcut = IhaleAracListeExtendedDTO.columnDefs(this.enumsService, this.ihaleService);
  }

  onRowUpdatingMevcut(options) {
    options.newData = Object.assign({}, options.oldData, options.newData);
  }
  cancel() {
    //this.ref.close();
  }
  getMevcutAraclarList(): Observable<IhaleAracListeDTO[]> {
    return this.ihaleService.getAraclar(this.ihaleBilgisiId);
  }
  ngAfterViewInit() {
    this.getData();
    this.enumsService.getIhaleAracDurumlari()
      .subscribe(data => this.ihaleAracDurumlari = data);
  }
  private getData() {
    this.ihaleService.getAraclar(this.ihaleBilgisiId)
      .subscribe(data => {
        this.ihaleAraclari = data;

      });
    this.aracService.getIhaleyeUygunlar(this.ihaleBilgisiId)
      .subscribe(data => {
        this.araclar = this.filtreliAraclar = data.map(m => {
          let item = new IhaleAracListeDTO();
          item.aracAracAdi = m.aracAdi;
          item.aracPlaka = m.plaka;
          item.aracId = m.id;
          item.ihaleBilgisiId = this.ihaleBilgisiId;
          item.baslangicFiyati = m.baslangicFiyati;
          item.hedefFiyat = m.hedefFiyat;
          item.ihaleDurum = IhaleAracDurum.Bekliyor;
          return item;
        });
      });
  }

  save() {
    let index = 1;
    const guncellemeler$ = [];
    const eklemeler$ = [];
    const silmeler$ = this.araclar.filter(f => !!f.id).map(a => {
      return this.service.delete(a.id);
    });
    for (let index = 0; index < this.ihaleAraclari.length; index++) {
      const m = this.ihaleAraclari[index];
      m.ihaleSirasi = index;
      if (m.id) {
        guncellemeler$.push(this.service.put(m.id, m));
      } else {
        let ekle = new IhaleAracEkleDTO({ aracId: m.aracId, baslangicFiyati: m.baslangicFiyati, firsatAraciMi: m.firsatAraciMi, id: m.id, ihaleBilgisiId: m.ihaleBilgisiId, ihaleDurum: m.ihaleDurum, ihaleSirasi: m.ihaleSirasi, oneCikanAracMi: m.oneCikanAracMi, hedefFiyat: m.hedefFiyat });
        eklemeler$.push(this.service.post(ekle));
      }
    }
    forkJoin([...eklemeler$, ...guncellemeler$, ...silmeler$]).subscribe(results => {
      this.getData();
    });
  }
  drop(event: CdkDragDrop<IhaleAracListeDTO[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let nextItem = event.container.data[event.currentIndex];
      if (nextItem && nextItem.ihaleDurum !== 0) {
        return;
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  firsatAraciDegisti(e, ihaleArac: IhaleAracListeDTO) {
    for (let i = 0; i < this.ihaleAraclari.length; i++) {
      const ia = this.ihaleAraclari[i];
      if (ia.id !== ihaleArac.id) {
        ia.firsatAraciMi = false;
      }
    }
  }
  aramaTextChange() {
    this.filtreliAraclar = this.araclar.filter(f => { return !this.aramaText || f.aracAracAdi.toLowerCase().indexOf(this.aramaText.toLowerCase()) >= 0 || f.aracPlaka.toLowerCase().indexOf(this.aramaText.toLowerCase()) >= 0 })
  }
  solaAktar() {
    for (let i = this.filtreliAraclar.length; i >= 0; i--) {
      // if (this.filtreliAraclar[i].ihaleDurum === 0) {

      transferArrayItem(this.filtreliAraclar,
        this.ihaleAraclari,
        i, this.ihaleAraclari.length);
      // }
    }
  }
  sagaAktar() {
    for (let i = this.ihaleAraclari.length; i >= 0; i--) {
      // if (this.ihaleAraclari[i].ihaleDurum === 0) {
      transferArrayItem(this.ihaleAraclari,
        this.filtreliAraclar,
        i, this.filtreliAraclar.length);
      // }
    }
  }
}
