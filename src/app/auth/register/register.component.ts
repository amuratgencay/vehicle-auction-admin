import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { NbAuthSocialLink } from '@nebular/auth';
import { Router } from '@angular/router';
import { KaydolDTO, AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

  redirectDelay = 0;
  showMessages: any = {};
  strategy = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: KaydolDTO = new KaydolDTO();
  socialLinks: NbAuthSocialLink[] = [];

  constructor(protected service: AuthServiceExtended,
              protected cd: ChangeDetectorRef,
              protected router: Router) {

    // this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    // this.showMessages = this.getConfigValue('forms.register.showMessages');
    // this.strategy = this.getConfigValue('forms.register.strategy');
    // this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.user).subscribe((result) => {
      this.submitted = false;
      if (result) {
        this.messages = [];
      } else {
        this.errors = [];
      }

      // const redirect = result.getRedirect();
      // if (redirect) {
      //   setTimeout(() => {
      //     return this.router.navigateByUrl(redirect);
      //   }, this.redirectDelay);
      // }
      this.cd.detectChanges();
    });
  }

  // getConfigValue(key: string): any {
  //   return getDeepFromObject(this.options, key, null);
  // }

}
