import { Component, OnInit } from '@angular/core';
import { AracService, MarkayaGoreAracSayilariDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource2: MarkayaGoreAracSayilariDTO[];
  dataSource1: any[];

  constructor(private aracService: AracService) { }

  ngOnInit() {
    this.aracService.getMarkayaGoreAracSayilari()
      .subscribe(res => {
        this.dataSource2 = res;
      });
    this.aracService.getDurumunaGoreAracSayilari()
      .subscribe(res => {
        this.dataSource1 = res;
      });
  }

}
