import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IcerikKategorisiDTO, IcerikKategorisiService } from '@zyazilim/online-ihale-data';
import { IcerikKategorisiExtendedDTO } from './icerik-kategorisi-model';

@Component({
  selector: 'icerik-kategorisi',
  templateUrl: './icerik-kategorisi.component.html',
  styleUrls: ['./icerik-kategorisi.component.scss'],
})
export class IcerikKategorisiComponent extends BaseListComponent<IcerikKategorisiDTO> implements OnInit {
  columns: any[];
  constructor(service: IcerikKategorisiService) {
    super(service, IcerikKategorisiDTO);
    this.columns = IcerikKategorisiExtendedDTO.columnDefs(service);
  }
}
