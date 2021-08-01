import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessCheckerService } from '../services/access-checker.service';
import { AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthServiceExtended, private _router: Router, private accessChecker: AccessCheckerService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const token = this.authService.getToken();
    if (token && token.roles && token.roles.length) {
      return true;
    }

    // navigate to login page
    this._router.navigate(['/auth/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
