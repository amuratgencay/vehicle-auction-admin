import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AracParcaDTO, AracEkspertizGecmisiDTO, AracParcaService, AracService, AracEkspertizGecmisiService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'arac-ekspertiz-gecmisi',
  templateUrl: './arac-ekspertiz-gecmisi.component.html',
  styleUrls: ['./arac-ekspertiz-gecmisi.component.scss']
})
export class AracEkspertizGecmisiComponent implements OnInit {
  parcalar: AracParcaDTO[];
  @Input() aracId: string;
  parcaDurumlari: AracEkspertizGecmisiDTO[];
  sonucGeldi: boolean;
  @Output() puanDegisti = new EventEmitter<any>();
  constructor(private parcaService: AracParcaService,
    private aracService: AracService,
    private aracEkspertizGecmisiSvc: AracEkspertizGecmisiService) {
    this.parcaService.getEkspertizOlanlar()
      .subscribe(parcalar => this.parcalar = parcalar);
  }

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.aracService.getAracEkspertizGecmisi(this.aracId)
      .subscribe(parcaDurumlari => {
        this.parcaDurumlari = parcaDurumlari;
        this.sonucGeldi = true;
        this.puanDegisti.next();
      });
  }

  durumChange(e, parca: AracParcaDTO, buyukluk: string) {
    let durum = this.parcayaGoreGetir(parca);
    if (durum) {
      durum[buyukluk] = e;
      this.aracEkspertizGecmisiSvc.put(durum.id, durum)
        .subscribe(res => { this.getData(); });
    } else {
      //durum = new AracEkspertizGecmisi(0, this.aracId, parca.id, false, false, parca.boyaliDeger, parca.degisenDeger);
      durum = new AracEkspertizGecmisiDTO();
      durum.aracId = this.aracId;
      durum.aracParcaId = parca.id;
      durum[buyukluk] = e;
      this.aracEkspertizGecmisiSvc.post(durum)
        .subscribe(res => { this.getData(); });
    }
  }
  parcayaGoreGetir(parca: AracParcaDTO): AracEkspertizGecmisiDTO {
    const parcaDurum = this.parcaDurumlari ? this.parcaDurumlari.find(f => f.aracParcaId === parca.id) : null;
    return parcaDurum;
  }
}
