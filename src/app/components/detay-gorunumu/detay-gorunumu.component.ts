import { Component, OnInit, Input, QueryList, ViewChildren, AfterViewInit, Output, ViewChild } from '@angular/core';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/devextreme-angular-ui-nested';
import { DxFormComponent } from 'devextreme-angular/ui/form';

@Component({
  selector: 'detay-gorunumu',
  templateUrl: './detay-gorunumu.component.html',
  styleUrls: ['./detay-gorunumu.component.scss'],
})
export class DetayGorunumuComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form: DxFormComponent;
  @ViewChildren('dynamicitems') dynamicitems: QueryList<DxiItemComponent>;
  @Input() public model;
  @Input() public colDefs;
  @Input() public isCollapsed: boolean;
  @Input() public readOnly: boolean = false;
  buttonOptions: any = {
    text: 'Kaydet',
    type: 'success',
    useSubmitBehavior: true,
  };
  iptalButtonOptions: any = {
    text: 'İptal',
    type: 'primary',
    useSubmitBehavior: false,
    click: (e) => {
      console.log(e)
    }
  };
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dynamicitems.forEach((x) => {
      if (x.editorType === 'dxSelectBox' && x.editorOptions.itemsAsync) {
        x.editorOptions.itemsAsync.subscribe(d => {
          x.editorOptions = { ...x.editorOptions, items: d };
        });
      } else {
        x.editorOptions = { ...x.editorOptions };
      }
    });
  }
  getEditorType(type) {
    switch (type) {
      case 'date':
      case 'datetime':
        return 'dxDateBox';
      case 'number':
        return 'dxNumberBox';
      case 'boolean':
        return 'dxCheckBox';
      case 'select':
        return 'dxSelectBox';
      case 'html':
        return 'dxHtmlEditor';
      case 'textarea':
        return 'dxTextArea';
      default:
        return 'dxTextBox';
    }
  }
}
