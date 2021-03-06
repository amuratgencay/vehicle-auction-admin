import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() onRowUpdating: EventEmitter<any> = new EventEmitter();
  @Output() onInitNewRow: EventEmitter<any> = new EventEmitter();
  @Output() onEditingStart: EventEmitter<any> = new EventEmitter();
  @Output() onToolbarPreparing: EventEmitter<any> = new EventEmitter();
  @Output() onEditorPreparing: EventEmitter<any> = new EventEmitter();
  @Output() onInitialized: EventEmitter<any> = new EventEmitter();
  @Output() dxGridReady: EventEmitter<any> = new EventEmitter();
  @Input() dataSource: any;
  @Input() columns: any[];
  @Input() buttons: any[];
  @Input() name = '';
  @Input() title = '';
  @Input() editMode = 'row';
  @Input() allowAdding = true;
  @Input() allowUpdating = true;
  @Input() allowDeleting = true;
  constructor() {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dxGridReady.emit(this.dataGrid);
  }
}
