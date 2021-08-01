import { OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { BaseService } from '@zyazilim/common'
export abstract class BaseListComponent<T> implements OnInit {
  settings: any = {};

  data: T[];
  public hiddenColumns: Array<string> = new Array<string>('id');
  dataSource: CustomStore;
  constructor(protected service: BaseService,
    private classReference: new () => T = null) {
    this.settings.allowEdit = true;
    this.settings.allowCreate = true;
    this.settings.allowDelete = true;
  }

  ngOnInit() {
    this.dataSource = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: () => {
        return this.getList().toPromise();
      },
      insert: (values) => {
        return this.service.post(values).toPromise();
      },
      update: (key, values) => {
        return this.service.put(key, values).toPromise();
      },
      remove: (key) => {
        return this.service.delete(key).toPromise();
      },
    });
    // if (this.settings.type === 'client') {
    //   this.getList();
    // }
  }
  getList(odataQs: string = ''): any {
    return this.service.getAll();
  }
  // create(e) {
  //   this.service.add(e.data)
  //     .subscribe(res => this.getList())
  // }
  // edit(e) {
  //   this.service.update(e.data.id, e.data)
  //     .subscribe(res => this.getList())
  // }
  // delete(e) {
  //   this.service.delete(e.data.id).subscribe(
  //     res => {
  //       if (this.settings.type === 'client') {
  //         this.getList();
  //       } else {
  //         this.serverSideData(new DataTableLazyLoadModel());
  //       }
  //     }
  //   );
  // }
  onRowUpdating(options) {
    options.newData = Object.assign({}, options.oldData, options.newData);
  }
  refresh(e) {
    if (this.settings.type === 'client') {
      this.getList();
    }
  }
  serverSideData(event: any) {
    this.getList(event.queryString);
  }
}
