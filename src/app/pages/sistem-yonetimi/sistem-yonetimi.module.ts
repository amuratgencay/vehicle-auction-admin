import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemYonetimiRoutingModule } from './sistem-yonetimi-routing.module';
import { DxDataGridModule, DxHtmlEditorModule } from 'devextreme-angular';
import { KullaniciListesiComponent } from './kullanici/kullanici-listesi/kullanici-listesi.component';
import { RoleListesiComponent } from './rol/role-listesi/role-listesi.component';
import { RoleDetayComponent } from './rol/role-detay/role-detay.component';
import { RolComponent } from './rol/rol.component';
import { ThemeModule } from '@ikinciel/theme/theme.module';
import { TranslateModule } from '@ngx-translate/core';
import { RolYetkiListesiComponent } from './rol-yetki/rol-yetki-listesi/rol-yetki-listesi.component';
import { KullaniciDetayComponent } from './kullanici/kullanici-detay/kullanici-detay.component';
import { RolKullaniciListesiComponent } from './rol-kullanici/rol-kullanici-listesi/rol-kullanici-listesi.component';
import { KullaniciComponent } from './kullanici/kullanici.component';
import { EpostaSablonlariListesiComponent } from './eposta-sablonlari/eposta-sablonlari-listesi/eposta-sablonlari-listesi.component';
import { SistemAyarlariListesiComponent } from './sistem-ayarlari/sistem-ayarlari-listesi/sistem-ayarlari-listesi.component';
import { SehirListesiComponent } from './sehir/sehir-listesi/sehir-listesi.component';
import { SehirComponent } from './sehir/sehir.component';
import { YetkiListesiComponent } from './yetki-tanimlari/yetki-listesi/yetki-listesi.component';
import { YetkiComponent } from './yetki-tanimlari/yetki.component';
import { YetkiDetayComponent } from './yetki-tanimlari/yetki-detay/yetki-detay.component';
import { DetayGorunumuModule } from '../../components/detay-gorunumu/detay-gorunumu.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  declarations: [KullaniciListesiComponent, RolComponent, RoleListesiComponent, RoleDetayComponent,
    RolKullaniciListesiComponent, RolYetkiListesiComponent, KullaniciComponent, KullaniciDetayComponent,
    EpostaSablonlariListesiComponent, SistemAyarlariListesiComponent, SehirListesiComponent, SehirComponent,
    YetkiComponent, YetkiListesiComponent, YetkiDetayComponent],
  imports: [
    CommonModule,
    SistemYonetimiRoutingModule,
    DxDataGridModule,
    ThemeModule,
    TranslateModule,
    DxHtmlEditorModule,
    DetayGorunumuModule,
    ComponentsModule,
  ],
})
export class SistemYonetimiModule { }
