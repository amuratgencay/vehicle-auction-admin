import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UyeBilgiRoutingModule } from './uye-bilgi-routing.module';
import { UyeComponent } from './uye/uye.component';
import { UyeListesiComponent } from './uye/uye-listesi/uye-listesi.component';
import { DxDataGridModule, DxHtmlEditorModule } from 'devextreme-angular';
import { ThemeModule } from '../../@theme/theme.module';
// import { TranslateModule } from '@ngx-translate/core';
import { UyeBilgiDetayComponent } from './uye/uye-bilgi-detay/uye-bilgi-detay.component';
// import { DetayGorunumuModule } from '../../@core/components/detay-gorunumu/detay-gorunumu.module';
import { UyeTeklifListesiComponent } from './uye/uye-teklif-listesi/uye-teklif-listesi.component';
import { ElitUyelikTalepleriComponent } from './uye/elit-uyelik-talepleri/elit-uyelik-talepleri.component';
import { BultenKayitListesiComponent } from './bulten/bulten-kayit-listesi/bulten-kayit-listesi.component';
import { ComponentsModule } from '../../components/components.module';
import { DetayGorunumuModule } from '../../components/detay-gorunumu/detay-gorunumu.module';
import { UyeKazandigiIhalelerComponent } from './uye/uye-kazandigi-ihaleler/uye-kazandigi-ihaleler.component';
import { UyeBilgiRuhsatSahibiYetkileriComponent } from './uye/uye-bilgi-ruhsat-sahibi-yetkileri/uye-bilgi-ruhsat-sahibi-yetkileri.component';

@NgModule({
  declarations: [UyeComponent, UyeListesiComponent, UyeBilgiDetayComponent, UyeTeklifListesiComponent, ElitUyelikTalepleriComponent, BultenKayitListesiComponent, UyeKazandigiIhalelerComponent, UyeBilgiRuhsatSahibiYetkileriComponent],
  imports: [
    CommonModule,
    UyeBilgiRoutingModule,
    DxDataGridModule,
    ThemeModule,
    // TranslateModule,
    DxHtmlEditorModule,
    ComponentsModule,
    DetayGorunumuModule
  ]
})
export class UyeBilgiModule { }
