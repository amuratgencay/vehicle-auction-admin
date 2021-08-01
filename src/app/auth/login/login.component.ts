import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NbAuthSocialLink } from '@nebular/auth';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GirisYapDTO, AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  redirectDelay = 0;
  user: GirisYapDTO = new GirisYapDTO();
  submitted = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;

  constructor(protected service: AuthServiceExtended,
    protected cd: ChangeDetectorRef,
    protected router: Router) {

    // this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.login.showMessages');
    // this.strategy = this.getConfigValue('forms.login.strategy');
    // this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    // this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }

  login(): void {
    this.submitted = true;
    this.service.authenticate(this.user)
      .pipe(res => {
        catchError((error) => {
          this.submitted = false;
          return throwError(error);
        });
        return res;
      })
      .subscribe((result) => {
        this.submitted = false;
        if (result.accessToken) {
          this.router.navigate(['']);
        } else {
        }
      });
  }

  // getConfigValue(key: string): any {
  //   return getDeepFromObject(this.options, key, null);
  // }

}
