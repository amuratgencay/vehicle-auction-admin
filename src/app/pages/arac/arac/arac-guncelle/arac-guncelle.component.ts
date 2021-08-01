
import { AracGuncelleExtendedDTO } from './arac-guncelle-model';
import { AracService, EnumsService, RenkService, LokasyonService, AracDurumService, RuhsatSahibiService, KazanilanAracDurumService, AracVersiyonService, AracVersionDTO, AracListeDTO } from '@zyazilim/online-ihale-data';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../../../@core/utils/utils.service';
import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'arac-guncelle',
  templateUrl: './arac-guncelle.component.html',
  styleUrls: ['./arac-guncelle.component.scss']
})
export class AracGuncelleComponent implements OnInit {
  @Input() id: any;
  arac: AracListeDTO;
  keys: any;
  constructor(private aracService: AracService,
    private enumsService: EnumsService,
    private renkService: RenkService,
    private lokasyonService: LokasyonService,
    private aracDurumService: AracDurumService,
    private ruhsatSahibiService: RuhsatSahibiService,
    private kazAracDurumService: KazanilanAracDurumService,
    private aracVersiyonService: AracVersiyonService,
    private activatedRoute: ActivatedRoute,
    private utilsService: UtilsService,
    private router: Router) {
  }
  ngOnInit() {
    this.keys = AracGuncelleExtendedDTO.columnDefs(this.renkService, this.enumsService, this.kazAracDurumService, this.aracVersiyonService,
      this.aracDurumService, this.ruhsatSahibiService, this.lokasyonService);
    this.keys.find(p => p.key === 'aracVersionId').editorOptions.onValueChanged = (e) => {
      const selected: AracVersionDTO = this.keys.find(p => p.key === 'aracVersionId').editorOptions.items.find(x => x.id === e.value);
      this.arac.aracAdi = `${selected.modelMarkaAd} ${selected.modelAd} ${selected.ad}`;
    };
    this.keys.find(p => p.key === 'aracAdi').editorOptions.onValueChanged = (e) => {

      this.arac.seoUrl = this.utilsService.getSafeUrl(e.value);
      this.arac.seoBaslik = 'İhale | ' + e.value + ' | Avec İkinci El';
    };
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.aracService.get(this.id)
      .subscribe(arac => {
        if (arac.kazanilanAracDurumuId === 7) {
          this.iptal();
        }
        this.arac = arac;
      });
  }

  iptal() {
    this.router.navigate(['/pages', 'arac', this.id, 'detay']);
  }
  kaydet() {
    this.aracService.put(this.id, this.arac)
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['/pages', 'arac', res.id, 'detay']);
        }
      });
  }
}
