import { Component, OnInit } from '@angular/core';
import { AracService, EnumsService, RenkService, LokasyonService, AracDurumService, RuhsatSahibiService, KazanilanAracDurumService, AracVersiyonService, AracVersionDTO } from '@zyazilim/online-ihale-data';
import { UtilsService } from '../../../../@core/utils/utils.service';
import { Router } from '@angular/router';
import { AracEkleExtendedDTO } from './arac-ekle-model';


@Component({
  selector: 'arac-ekle',
  templateUrl: './arac-ekle.component.html',
  styleUrls: ['./arac-ekle.component.scss'],
})
export class AracEkleComponent implements OnInit {
  arac: AracEkleExtendedDTO = new AracEkleExtendedDTO();
  keys: any;
  constructor(private aracService: AracService,
    private enumsService: EnumsService,
    private renkService: RenkService,
    private lokasyonService: LokasyonService,
    private aracDurumService: AracDurumService,
    private ruhsatSahibiService: RuhsatSahibiService,
    private kazAracDurumService: KazanilanAracDurumService,
    private aracVersiyonService: AracVersiyonService,
    private utilsService: UtilsService,
    private router: Router) {
  }
  ngOnInit() {
    this.keys = AracEkleExtendedDTO.columnDefs(this.renkService, this.enumsService, this.kazAracDurumService, this.aracVersiyonService,
      this.aracDurumService, this.ruhsatSahibiService, this.lokasyonService);
    this.keys.find(p => p.key === 'aracVersionId').editorOptions.onValueChanged = (e) => {
      const selected: AracVersionDTO = this.keys.find(p => p.key === 'aracVersionId').editorOptions.items.find(x => x.id === e.value);
      this.arac.aracAdi = `${selected.modelMarkaAd} ${selected.modelAd} ${selected.ad}`;
    };
    this.keys.find(p => p.key === 'aracAdi').editorOptions.onValueChanged = (e) => {
      this.arac.seoUrl = this.utilsService.getSafeUrl(e.value);
      this.arac.seoBaslik = 'İhale | ' + e.value + ' | Avec İkinci El';
    };
  }
  iptal() {
    this.router.navigate(['/pages', 'arac', 'list']);
  }
  kaydet() {
    this.aracService.post(this.arac)
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['/pages', 'arac', res.id, 'detay']);
        }
      });
  }
}
