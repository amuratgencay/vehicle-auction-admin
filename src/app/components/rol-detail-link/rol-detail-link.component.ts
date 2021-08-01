import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rol-detail-link',
  templateUrl: './rol-detail-link.component.html',
  styleUrls: ['./rol-detail-link.component.scss']
})
export class RolDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
