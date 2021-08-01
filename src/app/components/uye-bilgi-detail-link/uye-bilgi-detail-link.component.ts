import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uye-bilgi-detail-link',
  templateUrl: './uye-bilgi-detail-link.component.html',
  styleUrls: ['./uye-bilgi-detail-link.component.scss']
})
export class UyeBilgiDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  constructor() { }
  ngOnInit() {
  }

}
