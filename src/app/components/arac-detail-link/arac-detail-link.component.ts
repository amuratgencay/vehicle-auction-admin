import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'arac-detail-link',
  templateUrl: './arac-detail-link.component.html',
  styleUrls: ['./arac-detail-link.component.scss']
})
export class AracDetailLinkComponent implements OnInit {
  @Input() id: any;
  @Input() value: any;
  @Input() data: any;
  constructor() { }


  ngOnInit() {
  }

}
