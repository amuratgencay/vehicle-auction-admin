import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IhaleSatisModel } from './ihale-satis-model';
import { BaseListComponent } from '../../../@core/abstract/base-list.component';
import { IhaleAracService, IhaleAracKazananDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'ihale-satis',
  templateUrl: './ihale-satis.component.html',
  styleUrls: ['./ihale-satis.component.scss']
})
export class IhaleSatisComponent extends BaseListComponent<IhaleAracKazananDTO> implements OnInit {
  columns: any[];
  constructor(private _service: IhaleAracService) {
    super(_service, IhaleAracKazananDTO);
    this.columns = IhaleSatisModel.columnDefs();
  }
  getList() {
    return this._service.getKazanan();
  }
}



// implements OnInit {
//   dataSource: CustomStore;
//   columns: any[];

//   constructor(private ihaleAracServis: IhaleAracService) {
//     this.columns = IhaleSatisModel.columnDefs();
//   }

//   ngOnInit() {
//     this.dataSource = new CustomStore({
//       key: "id",
//       loadMode: "raw",
//       load: () => {
//         return this.ihaleAracServis.getKazanan().pipe(map(res => res.items)).toPromise();
//       },

//     });
//   }

// }
