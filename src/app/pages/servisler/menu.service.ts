import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AccessCheckerService } from '../../security/services/access-checker.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  constructor(private accessChecker: AccessCheckerService) { }
  async getMenu(): Promise<NbMenuItem[]> {
    const MENU_ITEMS: NbMenuItem[] = [
      {
        title: 'Sistem Yönetimi',
        icon: {
          icon: 'cog',
          pack: 'font-awesome-5',
        },
        children: [

          {
            title: 'Kullanıcı Listesi',
            link: '/pages/sistem-yonetimi/kullanici/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Rol Listesi',
            link: '/pages/sistem-yonetimi/rol/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Yetki Tanımları',
            link: '/pages/sistem-yonetimi/yetki/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Eposta Şablon Listesi',
            link: '/pages/sistem-yonetimi/eposta-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Şehir Listesi',
            link: '/pages/sistem-yonetimi/sehir/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Sistem Ayarları',
            link: '/pages/sistem-yonetimi/sistem-ayarlari',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'Araçlar',
        icon: {
          icon: 'car',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'Araç Yönetimi',
            link: '/pages/arac/liste',
            hidden: !await this.accessChecker.isGranted('ARAC01').toPromise(),
          },
          {
            title: 'Marka Listesi',
            link: '/pages/arac/marka-listesi',
            hidden: !await this.accessChecker.isGranted('MARKA01').toPromise(),
          },
          {
            title: 'Model Listesi',
            link: '/pages/arac/model-listesi',
            hidden: !await this.accessChecker.isGranted('MODEL01').toPromise(),
          },
          {
            title: 'Araç Versiyon Listesi',
            link: '/pages/arac/arac-versiyon-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Ruhsat Sahipleri',
            link: '/pages/arac/ruhsat-sahibi/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Lokasyon Listesi',
            link: '/pages/arac/lokasyon-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Renk Listesi',
            link: '/pages/arac/renk-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Donanım Listesi',
            link: '/pages/arac/donanim-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'Üye Bilgi',
        icon: {
          icon: 'user',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'Üye Listesi',
            link: '/pages/uye-bilgi/uye/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Elit Üyelik Talepleri',
            link: '/pages/uye-bilgi/uye/elit-uyelik-talepleri',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Bülten Kayıtları',
            link: '/pages/uye-bilgi/uye/bulten-kayitlari',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'Tanımlamalar',
        icon: {
          icon: 'tools',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'Araç Parça Listesi',
            link: '/pages/tanimlamalar/arac-parca/liste',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'Ihaleler',
        icon: {
          icon: 'gavel',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'İhale Listesi',
            link: '/pages/ihale/ihale-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Hemen Al Listesi',
            link: '/pages/ihale/hemen-al-listesi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Canlı İhale',
            icon: {
              icon: 'podcast',
              pack: 'font-awesome-5',
            },
            link: '/pages/ihale/canli-ihale',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'Raporlar',
        icon: {
          icon: 'tachometer-alt',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'Dashboard',
            link: '/pages/raporlar/dashboard',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Üye Durumu',
            link: '/pages/raporlar/uye-durumu',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Site Raporları',
            link: '/pages/raporlar/site-raporlari',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Üye Tipi Değişim Raporu',
            link: '/pages/raporlar/uye-tipi-degisim-raporu',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'Teminat Raporu',
            link: '/pages/raporlar/teminat-raporu',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'İhale Satış',
            link: '/pages/raporlar/ihale-satis',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
      {
        title: 'İçerik Yönetimi',
        icon: {
          icon: 'file-alt',
          pack: 'font-awesome-5',
        },
        children: [
          {
            title: 'İçerik Kategorisi',
            link: '/pages/icerik-yonetimi/icerik-kategorisi',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          {
            title: 'İçerik',
            link: '/pages/icerik-yonetimi/icerik',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
          // {
          //   title: 'Hakkımızda',
          //   link: '/pages/icerik-yonetimi/site-kullanim-klavuzu',
          //   hidden: !await this.accessChecker.isGranted('*').toPromise(),
          // },
          // {
          //   title: 'Firma Bilgileri',
          //   link: '/pages/icerik-yonetimi/firma-bilgileri',
          //   hidden: !await this.accessChecker.isGranted('*').toPromise(),
          // },
          {
            title: 'Slider Resimleri',
            link: '/pages/icerik-yonetimi/slider-resimleri',
            hidden: !await this.accessChecker.isGranted('*').toPromise(),
          },
        ],
      },
    ];
    this.hideParentWhenAllChildrenHidden(MENU_ITEMS);
    return MENU_ITEMS;
  }
  hideParentWhenAllChildrenHidden(menuItems: NbMenuItem[]) {
    if (menuItems)
      menuItems.forEach(element => {
        element.hidden = element.hidden
          || (element.children && (element.children.length === 0
            || element.children.filter(p => p.hidden === false).length === 0));
        if (element.children && element.children.length) {
          this.hideParentWhenAllChildrenHidden(element.children);
        }
      });
    return;
  }
}
