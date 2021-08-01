import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
// import { DataTableModule } from '@ikinciel/core/components/data-table/data-table.module';
import { FormsModule } from '@angular/forms';
// import { ThemeModule } from '@ikinciel/theme/theme.module';
import { NbCheckboxModule } from '@nebular/theme';
// import { EditorModule } from 'primeng/editor';
import { TranslateModule } from '@ngx-translate/core';
import { AracParcaListesiComponent } from './arac-parca/arac-parca-listesi/arac-parca-listesi.component';
import { AracParcaComponent } from './arac-parca/arac-parca.component';
import { DxCheckBoxModule, DxFileUploaderModule, DxSelectBoxModule, DxLoadPanelModule, DxDataGridModule } from 'devextreme-angular';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AracParcaListesiComponent, AracParcaComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    NbCheckboxModule,
    TranslateModule,
    TanimlamalarRoutingModule,
    DxCheckBoxModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxLoadPanelModule,
    DxDataGridModule,
    ComponentsModule
  ],
  entryComponents: [
  ]
})
export class TanimlamalarModule { }
