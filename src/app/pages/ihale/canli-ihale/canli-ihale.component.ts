import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { IhaleService, IhaleBilgisiListeDTO, IhaleBilgisiGeriSayim, IhaleTeklifVerilenAracDTO, IhaleSayfalamaBilgisi, IhaleAracService, IhaleAracListeDTO, IhaleTeklifServiceExtended, IhaleTeklifGeriSayim } from '@zyazilim/online-ihale-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'canli-ihale',
  templateUrl: './canli-ihale.component.html',
  styleUrls: ['./canli-ihale.component.scss']
})
export class CanliIhaleComponent implements OnInit {
  ihale: IhaleBilgisiGeriSayim;
  ihaleAktif: IhaleBilgisiListeDTO;
  aktifArac: IhaleTeklifVerilenAracDTO;
  touchedTop: boolean;
  subscriptions: Subscription[] = [];
  ihaleSayfalamaBilgisi: IhaleSayfalamaBilgisi;
  araclar: IhaleAracListeDTO[];
  acikTeklifler: string[] = [];
  teklifGeriSayim: IhaleTeklifGeriSayim;
  sonTeklif: any;
  zaman: number;
  teklifYazisiGoster: boolean;
  geriSayimTimeout: any;
  teklifTimeout: any;
  teklifGeldi: boolean;
  teklifYapildi$: Subscription;
  // @ViewChild('geriSayim', { static: true }) element:
  constructor(private ihaleService: IhaleService,
    private ihaleAracService: IhaleAracService,
    private ihaleTeklifService: IhaleTeklifServiceExtended,
    private changeDedector: ChangeDetectorRef,
    private hostElement: ElementRef) { }

  ngOnInit(): void {
    this.teklifYapildi();
    this.subscriptions.push(this.ihaleService.getEnYakinVeyaAktifIhale().subscribe(d => {
      this.ihaleAktif = d;
      if (this.ihaleAktif)
        this.getAraclar(this.ihaleAktif.id);
    }));
    this.subscriptions.push(this.ihaleAracService.getTeklifVerilenArac().subscribe(d => {
      this.aktifArac = d;
    }));
    this.subscriptions.push(this.ihaleService.ihaletimer().subscribe(data => {
      this.ihale = data;
      this.changeDedector.detectChanges();
    }));
    this.subscriptions.push(this.ihaleService.ihaleAktifOldu().subscribe(data => {
      this.ihale = null;
      this.ihaleAktif = data;
      if (this.ihaleAktif)
        this.getAraclar(this.ihaleAktif.id);
      this.changeDedector.detectChanges();
    }));
    this.subscriptions.push(this.ihaleService.ihaleKapandi().subscribe(data => {
      this.ihaleAktif = null;
      this.aktifArac = null;
      this.ihale = null;
      this.changeDedector.detectChanges();
    }));
    this.subscriptions.push(this.ihaleService.aracDegisti().subscribe(data => {
      this.aktifArac = data;
      this.changeDedector.detectChanges();
    }));
    this.subscriptions.push(this.ihaleTeklifService.ihaleTeklifGeriSayim().subscribe(data => {
      this.teklifGeriSayim = data;
    }));
  }
  getAraclar(id) {
    this.ihaleService.getAraclar(id)
      .subscribe(d => this.araclar = d);
  }
  teklifGosterKaldir(id) {
    if (this.tekliflerAcikMi(id)) {
      this.acikTeklifler.splice(this.acikTeklifler.indexOf(id), 1);
    } else {
      this.acikTeklifler.push(id);
    }
  }
  tekliflerAcikMi(id): boolean {
    return this.acikTeklifler.indexOf(id) > -1;
  }
  teklifYapildi() {
    this.teklifYapildi$ = this.ihaleTeklifService.teklifYapildi().subscribe(data => {
      this.sonTeklif = data;
      this.zaman = Date.now();
      this.teklifYazisiGoster = true;
      if (this.geriSayimTimeout) {
        clearTimeout(this.geriSayimTimeout);
      }
      this.geriSayimTimeout = setTimeout(() => {
        this.teklifYazisiGoster = false;
        clearTimeout(this.geriSayimTimeout);
      }, 1000);
      this.changeDedector.detectChanges();
      if (this.teklifTimeout) {
        clearTimeout(this.teklifTimeout);
      }
      this.teklifTimeout = setTimeout(() => {
        this.teklifGeldi = false;
        clearTimeout(this.teklifTimeout);
        this.changeDedector.detectChanges();
      }, 400);
    });
  }
}
