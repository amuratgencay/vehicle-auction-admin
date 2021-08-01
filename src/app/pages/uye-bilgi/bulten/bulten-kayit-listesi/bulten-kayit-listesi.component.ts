import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseListComponent } from '../../../../@core/abstract/base-list.component';
import { DxDataGridComponent } from 'devextreme-angular';
import { BultenListeDTO, BultenService } from '@zyazilim/online-ihale-data';
import { BultenListeExtendedDTO } from '../bulten-model';

@Component({
  selector: 'bulten-kayit-listesi',
  templateUrl: './bulten-kayit-listesi.component.html',
  styleUrls: ['./bulten-kayit-listesi.component.scss']
})
export class BultenKayitListesiComponent extends BaseListComponent<BultenListeDTO> implements OnInit {
  data: BultenListeDTO[];
  @ViewChild(DxDataGridComponent) grid: DxDataGridComponent;
  columns: any[];
  constructor(private _service: BultenService) {
    super(_service, BultenListeDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = BultenListeExtendedDTO.columnDefs();
  }
}
