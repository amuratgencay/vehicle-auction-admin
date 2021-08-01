import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ruhsat-sahibi-detail-link',
  templateUrl: './ruhsat-sahibi-detail-link.component.html',
  styleUrls: ['./ruhsat-sahibi-detail-link.component.scss']
})
export class RuhsatSahibiDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }
}
