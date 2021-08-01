import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
  user: any = {};
  constructor(protected service: AuthServiceExtended,
    protected cd: ChangeDetectorRef,
    protected router: Router) {

  }
  ngOnInit(): void {
  }
  requestPass(): void {
    this.service.sifreTalepEt(this.user.email)
      .subscribe((result) => {
      });
  }
}
