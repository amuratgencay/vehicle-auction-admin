import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { IcerikYonetimiService, IcerikKategorisiService, IcerikYonetimiDTO } from '@zyazilim/online-ihale-data';
import { IcerikYonetimiExtendedDTO } from '../models/icerik-yonetimi-model';

@Component({
  selector: 'icerik',
  templateUrl: './icerik.component.html',
  styleUrls: ['./icerik.component.scss']
})
export class IcerikComponent extends BaseListComponent<IcerikYonetimiDTO> implements OnInit {
  columns: any[];
  constructor(service: IcerikYonetimiService, icerikKategoriService: IcerikKategorisiService) {
    super(service, IcerikYonetimiDTO);
    this.columns = IcerikYonetimiExtendedDTO.columnDefs(icerikKategoriService);
  }
}