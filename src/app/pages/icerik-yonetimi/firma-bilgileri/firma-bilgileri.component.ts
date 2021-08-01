import { Component, OnInit } from '@angular/core';
import { IcerikYonetimiDTO, IcerikYonetimiService } from '@zyazilim/online-ihale-data';
import { BaseListComponent } from '../../../@core/abstract/base-list.component';

@Component({
  selector: 'firma-bilgileri',
  templateUrl: './firma-bilgileri.component.html',
  styleUrls: ['./firma-bilgileri.component.scss']
})
export class FirmaBilgileriComponent extends BaseListComponent<IcerikYonetimiDTO> implements OnInit {
  deger: string;
  constructor(private _service: IcerikYonetimiService) {
    super(_service, IcerikYonetimiDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
  }
  getList(): any {
    return this._service.getByKategoriKod('firma-bilgileri');
  }
  setEditedValue(valueChangedEventArg, cellInfo) {
    cellInfo.setValue(valueChangedEventArg.value);
  }
}
