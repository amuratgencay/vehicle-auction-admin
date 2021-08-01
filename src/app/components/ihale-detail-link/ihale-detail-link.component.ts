import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ihale-detail-link',
  templateUrl: './ihale-detail-link.component.html',
  styleUrls: ['./ihale-detail-link.component.scss']
})
export class IhaleDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
