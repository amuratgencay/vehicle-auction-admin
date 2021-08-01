import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IhaleBilgisiListesiComponent } from './ihale-bilgisi/ihale-bilgisi-listesi/ihale-bilgisi-listesi.component';
import { IhaleRoutingModule } from './ihale-routing.module';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '@ikinciel/theme/theme.module';
import { IhaleBilgisiDetayComponent } from './ihale-bilgisi/ihale-bilgisi-detay/ihale-bilgisi-detay.component';
import { TranslateModule } from '@ngx-translate/core';
import { IhaleBilgisiAracEkleComponent } from './ihale-bilgisi/ihale-bilgisi-arac-ekle/ihale-bilgisi-arac-ekle.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DxDataGridModule, DxListModule, DxNumberBoxModule } from 'devextreme-angular';
import { IhaleBilgisiTeklifListesiComponent } from './ihale-bilgisi/ihale-bilgisi-teklif-listesi/ihale-bilgisi-teklif-listesi.component';
import { DetayGorunumuModule } from '../../components/detay-gorunumu/detay-gorunumu.module';
import { ComponentsModule } from '../../components/components.module';
import { HemenAlListesiComponent } from './hemen-al/hemen-al-listesi/hemen-al-listesi.component';
import { HemenAlDetayComponent } from './hemen-al/hemen-al-detay/hemen-al-detay.component';
import { CanliIhaleComponent } from './canli-ihale/canli-ihale.component';
import { NbCardModule } from '@nebular/theme';
import { AracModule } from '../arac/arac.module';
import { IhaleAracTeklifComponent } from './ihale-arac-teklif/ihale-arac-teklif.component';
import { CountDownTimerModule } from '@zyazilim/count-down-timer';
import { IhaleTeklifSayacComponent } from './canli-ihale/ihale-teklif/ihale-teklif-sayac/ihale-teklif-sayac.component';


@NgModule({
  declarations: [IhaleBilgisiListesiComponent,
    IhaleBilgisiDetayComponent, IhaleBilgisiAracEkleComponent,
    IhaleBilgisiTeklifListesiComponent, IhaleTeklifSayacComponent,
    HemenAlListesiComponent,
    HemenAlDetayComponent,
    CanliIhaleComponent,
    IhaleAracTeklifComponent],
  imports: [
    IhaleRoutingModule,
    CommonModule,
    ThemeModule,
    FormsModule,
    TranslateModule,
    DragDropModule,
    DxDataGridModule,
    DetayGorunumuModule,
    ComponentsModule,
    DxListModule,
    DxNumberBoxModule,
    NbCardModule,
    AracModule,
    CountDownTimerModule
  ],
  entryComponents: [
    IhaleBilgisiAracEkleComponent]
})
export class IhaleModule { }
