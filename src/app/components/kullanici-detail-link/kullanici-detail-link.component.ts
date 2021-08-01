import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kullanici-detail-link',
  templateUrl: './kullanici-detail-link.component.html',
  styleUrls: ['./kullanici-detail-link.component.scss']
})
export class KullaniciDetailLinkComponent {
  @Input() id: any;
  @Input() value: any;
  constructor() { }
}
