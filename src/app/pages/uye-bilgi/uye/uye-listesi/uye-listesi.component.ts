import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UyeBilgiDTO, UyeBilgiService, EnumsService, RuhsatSahibiService, SehirService } from '@zyazilim/online-ihale-data';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { UyeBilgiExtendedDTO } from '../uye-bilgi-model';

@Component({
  selector: 'uye-listesi',
  templateUrl: './uye-listesi.component.html',
  styleUrls: ['./uye-listesi.component.scss']
})
export class UyeListesiComponent extends BaseListComponent<UyeBilgiDTO> implements OnInit {
  grid: DxDataGridComponent;
  columns: any[];
  buttons: any[];
  constructor(private _service: UyeBilgiService,
    private enumsService: EnumsService,
    private sehirServis: SehirService,
    ruhsatSahibiService: RuhsatSahibiService) {
    super(_service, UyeBilgiDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = UyeBilgiExtendedDTO.columnDefs(enumsService, sehirServis, ruhsatSahibiService);
    this.buttons = [
      {
        hint: "Onayla",
        icon: "check",
        click: (e) => {
          this.onayla(e);
        }
      }
    ];
    this.onayla = this.onayla.bind(this);
  }
  onayla(e: any) {
    let data = (e.row.data as UyeBilgiDTO);
    this._service.aktivasyon(data.id).subscribe(d => {
      this.grid.instance.refresh();
    });
    e.event.preventDefault();
  }
  gridReady(e) {
    this.grid = e;
  }
}