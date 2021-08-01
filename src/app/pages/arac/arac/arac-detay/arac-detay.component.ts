import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AracService, RenkService, EnumsService, LokasyonService, AracDurumService,
  KazanilanAracDurumService, AracGuncelleDTO, RuhsatSahibiService, AracVersiyonService, AracVersionDTO, AracListeDTO
} from '@zyazilim/online-ihale-data'
import { AracGuncelleExtendedDTO } from '../arac-guncelle/arac-guncelle-model';
@Component({
  selector: 'arac-detay',
  templateUrl: './arac-detay.component.html',
  styleUrls: ['./arac-detay.component.scss']
})
export class AracDetayComponent implements OnInit {
  isCollapsed: boolean;
  @Input() id: string;
  arac: AracGuncelleDTO;
  keys: any[];
  constructor(private aracService: AracService,
    private activatedRoute: ActivatedRoute,
    private renkService: RenkService,
    private enumsService: EnumsService,
    private lokasyonService: LokasyonService,
    private kazAracDurumSvc: KazanilanAracDurumService,
    private aracDurumService: AracDurumService,
    private ruhsatSahibiService: RuhsatSahibiService,
    private aracVersiyonService: AracVersiyonService,
    private router: Router) { }

  ngOnInit() {
    this.keys = AracGuncelleExtendedDTO.columnDefs(this.renkService,
      this.enumsService,
      this.kazAracDurumSvc,
      this.aracVersiyonService,
      this.aracDurumService,
      this.ruhsatSahibiService,
      this.lokasyonService);
    this.keys.find(p => p.key === 'aracVersionId').editorOptions.onValueChanged = (e) => {
      const selected: AracVersionDTO = this.keys.find(p => p.key === 'aracVersionId').editorOptions.items.find(x => x.id === e.value);
      this.arac.aracAdi = `${selected.modelMarkaAd} ${selected.modelAd} ${selected.ad}`;
    };
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.aracService.get(this.id)
      .subscribe(arac => {
        this.arac = new AracGuncelleDTO(arac);
      });
  }

  guncelle(row: AracListeDTO) {
    this.router.navigate(['/pages', 'arac', row.id, 'guncelle']);
    return null;
  }
  puanDegisti() {
    this.getData();
  }
}
