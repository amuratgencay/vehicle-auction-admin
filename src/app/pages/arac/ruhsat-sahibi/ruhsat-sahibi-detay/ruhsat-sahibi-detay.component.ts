import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuhsatSahibiService, RuhsatSahibiDTO } from '@zyazilim/online-ihale-data';
import { RuhsatSahibiExtendedDTO } from '../ruhsat-sahibi-model';

@Component({
  selector: 'ruhsat-sahibi-detay',
  templateUrl: './ruhsat-sahibi-detay.component.html',
  styleUrls: ['./ruhsat-sahibi-detay.component.scss']
})
export class RuhsatSahibiDetayComponent implements OnInit {
  @Input() readOnly: boolean = true;
  @Input() model: RuhsatSahibiDTO;
  @Input() id: number;
  columns: any[];

  constructor(private service: RuhsatSahibiService,
    private activatedRoute: ActivatedRoute) {
    this.columns = RuhsatSahibiExtendedDTO.columnDefs();
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.service.get(this.id)
      .subscribe(res => {
        this.model = res;
      });
  }
  guncelle() {
    this.readOnly = false;
  }
  iptal() {
    this.readOnly = true;
  }
  kaydet(e) {
    e.preventDefault();
    this.service.put(this.id, this.model)
      .subscribe(res => {
        if (res && res.id) {
          this.readOnly = true;
        }
      });
  }
}
