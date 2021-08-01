import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hemen-al-detail-link',
  templateUrl: './hemen-al-detail-link.component.html',
  styleUrls: ['./hemen-al-detail-link.component.scss']
})
export class HemenAlDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
