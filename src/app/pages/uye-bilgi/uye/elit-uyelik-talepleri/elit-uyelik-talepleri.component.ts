import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { map } from 'rxjs/operators';
import { ElitUyelikTalebiDTO, EnumsService, ElitUyelikTalepService, ElitUyelikTalebiOnaylaDTO, ElitUyelikTalebiReddetDTO } from '@zyazilim/online-ihale-data';
import { ElitUyelikTalebiExtendedDTO } from './elit-uyelik-talebi-model';

@Component({
  selector: 'elit-uyelik-talepleri',
  templateUrl: './elit-uyelik-talepleri.component.html',
  styleUrls: ['./elit-uyelik-talepleri.component.scss']
})
export class ElitUyelikTalepleriComponent extends BaseListComponent<ElitUyelikTalebiDTO> implements OnInit {
  grid: DxDataGridComponent;
  columns: any[];
  buttons: any[];
  talepDurumlari: any;
  constructor(private _service: ElitUyelikTalepService,
    private enumsService: EnumsService) {
    super(_service, ElitUyelikTalebiDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    enumsService.getElitUyelikTalepDurumlari()
      .subscribe(data => this.talepDurumlari = data);
    this.columns = ElitUyelikTalebiExtendedDTO.columnDefs(enumsService);
    this.buttons = [
      {
        hint: "Onayla",
        icon: "check",
        click: (e) => {
          this.onayla(e);
        }
      },
      {
        hint: "Reddet",
        icon: "close",
        click: (e) => {
          this.reddet(e);
        }
      }
    ];
    this.onayla = this.onayla.bind(this);
    this.reddet = this.reddet.bind(this);
  }
  getList(odataQs: string = ''): any {
    return this._service.getOnayBekleyenler();
  }
  onayla(e) {
    let data = (e.row.data as ElitUyelikTalebiOnaylaDTO);
    this._service.putOnayla(data.id, data)
      .subscribe((res) => {
        this.grid.instance.refresh();
      });
    e.event.preventDefault();
  }
  reddet(e) {
    let data = (e.row.data as ElitUyelikTalebiReddetDTO);
    this._service.putReddet(data.id, data)
      .subscribe((res) => {
        this.grid.instance.refresh();
      });
    e.event.preventDefault();
  }
  gridReady(e) {
    this.grid = e;
  }
}
