import { Component, OnInit, Input } from '@angular/core';
import { KullaniciExtendedDTO } from '../kullanici-model';
import { ActivatedRoute, Router } from '@angular/router';
import { KullaniciService, KullaniciDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'kullanici-detay',
  templateUrl: './kullanici-detay.component.html',
  styleUrls: ['./kullanici-detay.component.scss']
})
export class KullaniciDetayComponent implements OnInit {
  isCollapsed: boolean;
  @Input() id: string;
  model: KullaniciDTO;
  keys: any[];
  constructor(private service: KullaniciService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.service.get(this.id)
      .subscribe(data => {
        this.model = data;
        this.keys = KullaniciExtendedDTO.columnDefs();
      });
  }
}
