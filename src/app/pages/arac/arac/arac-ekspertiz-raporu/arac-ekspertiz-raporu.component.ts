import { Component, OnInit, Input } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { AracEkspertizRaporuDTO, AracEkspertizRaporuService, AracService } from '@zyazilim/online-ihale-data';
import { AracEkspertizRaporuExtendedDTO } from './arac-ekspertiz-raporu-model';

@Component({
  selector: 'arac-ekspertiz-raporu',
  templateUrl: './arac-ekspertiz-raporu.component.html',
  styleUrls: ['./arac-ekspertiz-raporu.component.scss']
})
export class AracEkspertizRaporuComponent extends BaseListComponent<AracEkspertizRaporuDTO> implements OnInit {
  @Input() aracId: string;
  columns: any[];
  popupVisible = false;
  progress: number;
  constructor(private _service: AracEkspertizRaporuService,
    private aracService: AracService,
  ) {
    super(_service, AracEkspertizRaporuDTO);
    this.columns = AracEkspertizRaporuExtendedDTO.columnDefs();
  }
  getList(odataQs: string = '') {
    return this.aracService.getAracEkspertizRaporu(this.aracId)
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'upload',
        hint: 'Dosya Yükle',
        onClick: this.dosyaYukle.bind(this),
      },
    });
  }
  dosyaYukle(e) {
    this.popupVisible = true;
  }
  create(e) {
    this._service.post({
      data: e.value[0],
      fileName: e.value[0].name
    }, this.aracId)
      .subscribe(event => {
        this.getList();
        this.popupVisible = false;
        this.progress = 0;
      });
  }
}
