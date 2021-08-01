import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthServiceExtended,
    private router: Router) { }

  ngOnInit() {
    this.authService.logout()
      .subscribe(d => {
        this.router.navigate(['/auth', 'login']);
      });
  }
}
