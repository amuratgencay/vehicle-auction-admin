import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '../../../@core/abstract/base-list.component';
import { map } from 'rxjs/operators';
import { IcerikYonetimiDTO, IcerikYonetimiService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'sozlesmeler',
  templateUrl: './sozlesmeler.component.html',
  styleUrls: ['./sozlesmeler.component.scss']
})
export class SozlesmelerComponent extends BaseListComponent<IcerikYonetimiDTO> implements OnInit {
  constructor(private _service: IcerikYonetimiService) {
    super(_service, IcerikYonetimiDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
  }
  getList():any {
    return this._service.getByKategoriKod('sozlesmeler');
  }
  setEditedValue(valueChangedEventArg, cellInfo) {
    cellInfo.setValue(valueChangedEventArg.value);
  }
}
