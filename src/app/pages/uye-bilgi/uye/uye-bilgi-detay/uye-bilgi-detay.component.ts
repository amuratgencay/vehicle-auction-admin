import { Component, OnInit, Input } from '@angular/core';
import { UyeBilgiExtendedDTO } from '../uye-bilgi-model';
import { ActivatedRoute } from '@angular/router';
import { UyeBilgiService, SehirService, EnumsService, RuhsatSahibiService, UyeBilgiDTO } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'uye-bilgi-detay',
  templateUrl: './uye-bilgi-detay.component.html',
  styleUrls: ['./uye-bilgi-detay.component.scss'],
})
export class UyeBilgiDetayComponent implements OnInit {
  @Input() id: string;
  model: UyeBilgiDTO;
  isCollapsed = false;
  readOnly = true;
  keys: any[];
  constructor(private uyeBilgiService: UyeBilgiService,
    enumsService: EnumsService,
    sehirServis: SehirService,
    ruhsatSahibiService: RuhsatSahibiService,
    private activatedRoute: ActivatedRoute) {
    const required = {
      type: 'required',
      message: 'Zorunludur',
    };
    this.keys = UyeBilgiExtendedDTO.columnDefs(enumsService, sehirServis, ruhsatSahibiService);
    this.keys.find(p => p.key === 'kurumsalUye').editorOptions.onValueChanged = (e) => {
      if (e.value) {

        this.keys.find(p => p.key === 'firmaAdi').validators = [required];
        this.keys.find(p => p.key === 'vergiDairesi').validators = [required];
        this.keys.find(p => p.key === 'vergiNumarasi').validators = [required];
      } else {
        this.keys.find(p => p.key === 'firmaAdi').validators = [];
        this.keys.find(p => p.key === 'vergiDairesi').validators = [];
        this.keys.find(p => p.key === 'vergiNumarasi').validators = [];
      }
    };
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.uyeBilgiService.get(this.id)
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
    this.uyeBilgiService.put(this.id, this.model)
      .subscribe(res => {
        if (res && res.id) {
          this.readOnly = true;
        }
      });
  }
}
