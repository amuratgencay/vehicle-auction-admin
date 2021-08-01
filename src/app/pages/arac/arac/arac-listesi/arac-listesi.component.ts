import {
  AracListeDTO, AracService, EnumsService, MarkaService, ModelService, RenkService, LokasyonService,
  AracDurumService, RuhsatSahibiService, KazanilanAracDurumService, AracVersiyonService
} from '@zyazilim/online-ihale-data';
import { AracListeExtendedDTO } from './arac-list-model';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'arac-listesi',
  templateUrl: './arac-listesi.component.html',
  styleUrls: ['./arac-listesi.component.scss']
})
export class AracListesiComponent extends BaseListComponent<AracListeDTO> implements OnInit {
  data: AracListeDTO[];
  columns: any[];
  constructor(private _service: AracService,
    enumsService: EnumsService,
    private router: Router,
    markaService: MarkaService,
    modelService: ModelService,
    renkService: RenkService,
    lokasyonService: LokasyonService,
    aracDurumService: AracDurumService,
    ruhsatSahibiService: RuhsatSahibiService,
    kazAracDurumService: KazanilanAracDurumService,
    aracVersiyonService: AracVersiyonService) {
    super(_service, AracListeDTO);
    this.columns = AracListeExtendedDTO.columnDefs(markaService,
      modelService,
      aracVersiyonService,
      lokasyonService,
      kazAracDurumService,
      aracDurumService,
      ruhsatSahibiService,
      renkService,
      enumsService);
  }
  create() {
    this.router.navigate(['/pages', 'arac', 'ekle']);
    return false;
  }
  edit(e) {
    this.router.navigate(['/pages', 'arac', e.data.id, 'guncelle']);
    return false;
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'upload',
        hint: 'Toplu Araç Yükle',
        onClick: this.topluAracYukleClick.bind(this),
      },
    });
  }
  topluAracYukleClick(e) {
    this.router.navigate(['/pages', 'arac', 'toplu-yukle']);
  }
}
