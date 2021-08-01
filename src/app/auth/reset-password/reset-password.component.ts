import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthServiceExtended, SifreSifirlaDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  user: any = {};
  code: any;

  constructor(protected service: AuthServiceExtended,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.params['code'];
  }
  resetPass(): void {
    if (this.code) {
      this.service.sifreSifirla(new SifreSifirlaDTO({ sifre: this.user.password, sifreSifirlamaKodu: this.code }))
        .subscribe((result) => {
          if (result) {
          } else {
          }
        },
          catchError(error => {
            Object.keys(error.error).forEach(key => {
            });
            return throwError(error);
          }));
    }
  }
}
