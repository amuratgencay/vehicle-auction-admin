import { Component } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';
import { MenuService } from './servisler/menu.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BreadCrumb } from '@ikinciel/core/models/bread-crumb-model';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';
// <ol class="breadcrumb">
//         <li *ngFor="let breadcrumb of breadcrumbs$ | async"
//             class="breadcrumb-item">
//           <a [routerLink]="[breadcrumb.url, breadcrumb.params]">
//             {{ breadcrumb.label }}
//           </a>
//         </li>
//       </ol>
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu: NbMenuItem[];
  breadcrumbs$: any;
  /**
   *
   */
  constructor(private menuService: MenuService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.breadcrumbs$ = this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .pipe(distinctUntilChanged())
    //   .pipe(map(event => this.buildBreadCrumb(this.activatedRoute.root)));
    this.menuService.getMenu().then(menu => {
      this.menu = menu;
    });
  }
  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    //If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      //If we are not on our current path yet, 
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
