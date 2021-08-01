import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { confirm } from 'devextreme/ui/dialog';
import { AuthServiceExtended, SistemAyarlariService, SistemAyarlariDTO } from '@zyazilim/online-ihale-data';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  onTokenChange$: Subscription;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profile' }, { title: 'Çıkış Yap', link: '/auth/logout' }];
  siteGuncelleniyor: boolean;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private sistemAyarlariService: SistemAyarlariService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: AuthServiceExtended) {
  }

  ngOnInit() {
    this.sistemAyarlariService.getSiteGuncelleniyor()
      .subscribe(d => {
        this.siteGuncelleniyor = d.deger === 'true';
      })
    this.currentTheme = this.themeService.currentTheme;

    this.user = this.authService.getToken();
    this.onTokenChange$ = this.authService.onTokenChange().subscribe(token => {
      this.user = token;
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.onTokenChange$.unsubscribe();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  sistemiKapat(siteGuncelleniyor) {
    const result = confirm(`<i>Sistem ${siteGuncelleniyor ? 'açılacak' : 'kapatılacak'}  emin misiniz?</i>`, 'Onayla');
    result.then((res) => {
      if (res) {
        this.sistemAyarlariService.putSiteGuncelleniyor(new SistemAyarlariDTO({ deger: (!siteGuncelleniyor).toString(), id: null, aciklama: null, kod: null }))
          .subscribe(d => this.siteGuncelleniyor = d.deger === 'true');
      }
    });
  }
}
