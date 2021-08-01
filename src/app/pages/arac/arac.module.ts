import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AracRoutingModule } from './arac-routing.module';
import { AracListesiComponent } from './arac/arac-listesi/arac-listesi.component';
import { AracEkleComponent } from './arac/arac-ekle/arac-ekle.component';
import { AracGuncelleComponent } from './arac/arac-guncelle/arac-guncelle.component';
import { MarkaListesiComponent } from './marka/marka-listesi/marka-listesi.component';
import { ModelListesiComponent } from './model/model-listesi/model-listesi.component';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '@ikinciel/theme/theme.module';
import { NbCheckboxModule, NbCardModule, NbBadgeModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { AracDetayComponent } from './arac/arac-detay/arac-detay.component';
import { AracComponent } from './arac/arac.component';
import { TranslateModule } from '@ngx-translate/core';
import { AracMevcutDurumComponent } from './arac/arac-mevcut-durum/arac-mevcut-durum.component';
import { AracEkspertizGecmisiComponent } from './arac/arac-ekspertiz-gecmisi/arac-ekspertiz-gecmisi.component';
import { AracIhaleGecmisiComponent } from './arac/arac-ihale-gecmisi/arac-ihale-gecmisi.component';
import { AracResimListesiComponent } from './arac/arac-resim-listesi/arac-resim-listesi.component';
import { UploadFileModule } from '../../@core/components/upload-file/upload-file.module';
import {
  DxDataGridModule, DxCheckBoxModule, DxFileUploaderModule, DxSelectBoxModule, DxLoadPanelModule, DxSwitchModule, DxFormModule, DxPopupModule, DxButtonModule,
} from 'devextreme-angular';
import { RuhsatSahibiListesiComponent } from './ruhsat-sahibi/ruhsat-sahibi-listesi/ruhsat-sahibi-listesi.component';
import { LokasyonListesiComponent } from './lokasyon/lokasyon-listesi/lokasyon-listesi.component';
import { RenkListesiComponent } from './renk/renk-listesi/renk-listesi.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AracVersiyonListesiComponent } from './arac-versiyon/arac-versiyon-listesi/arac-versiyon-listesi.component';
import { AracTopluYukleComponent } from './arac/arac-toplu-yukle/arac-toplu-yukle.component';
import { DetayGorunumuModule } from '../../components/detay-gorunumu/detay-gorunumu.module';
import { AracTeklifListesiComponent } from './arac/arac-teklif-listesi/arac-teklif-listesi.component';
import { DonanimListesiComponent } from './donanim/donanim-listesi/donanim-listesi.component';
import { AracDonanimComponent } from './arac/arac-donanim/arac-donanim.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';
import { RuhsatSahibiYetkilileriComponent } from './ruhsat-sahibi/ruhsat-sahibi-yetkilileri/ruhsat-sahibi-yetkilileri.component';
import { RuhsatSahibiDetayComponent } from './ruhsat-sahibi/ruhsat-sahibi-detay/ruhsat-sahibi-detay.component';
import { RuhsatSahibiComponent } from './ruhsat-sahibi/ruhsat-sahibi.component';
import { AracEkspertizRaporuComponent } from './arac/arac-ekspertiz-raporu/arac-ekspertiz-raporu.component';
import { ResimBoyutlandirModule } from '../../@core/components/resim-boyutlandir/resim-boyutlandir.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { RuhsatSahibiHesaplariComponent } from './ruhsat-sahibi/ruhsat-sahibi-hesaplari/ruhsat-sahibi-hesaplari.component';
@NgModule({
  declarations: [
    AracListesiComponent, AracEkleComponent, AracGuncelleComponent,
    MarkaListesiComponent, ModelListesiComponent,
    AracDetayComponent, AracComponent, AracMevcutDurumComponent,
    AracEkspertizGecmisiComponent, AracIhaleGecmisiComponent,
    AracResimListesiComponent, RuhsatSahibiListesiComponent,
    LokasyonListesiComponent, RenkListesiComponent, AracVersiyonListesiComponent, AracTopluYukleComponent, AracTeklifListesiComponent,
    DonanimListesiComponent, AracDonanimComponent,
    RuhsatSahibiYetkilileriComponent, RuhsatSahibiHesaplariComponent, RuhsatSahibiDetayComponent, RuhsatSahibiComponent, AracEkspertizRaporuComponent,
  ],
  imports: [
    CommonModule,
    AracRoutingModule,
    FormsModule,
    ThemeModule,
    NbCheckboxModule,
    TranslateModule,
    UploadFileModule,
    DragDropModule,
    DxCheckBoxModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
    DxLoadPanelModule, DxDataGridModule, DxSwitchModule,
    DetayGorunumuModule,
    NbCardModule,
    NgbTabsetModule,
    DxFormModule,
    NbBadgeModule,
    ComponentsModule,
    DxPopupModule,
    DxButtonModule,
    ResimBoyutlandirModule,
    ImageCropperModule,
    NbSpinnerModule,
    NbTabsetModule
  ],
  entryComponents: [
  ],
  exports: [AracTeklifListesiComponent]
})
export class AracModule { }
