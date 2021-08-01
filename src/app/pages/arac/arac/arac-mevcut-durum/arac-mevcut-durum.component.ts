import { Component, OnInit, Input } from '@angular/core';
import { AracParcaDTO, AracParcaMevcutDurumDTO, AracParcaService, AracService, AracParcaMevcutDurumService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'arac-mevcut-durum',
  templateUrl: './arac-mevcut-durum.component.html',
  styleUrls: ['./arac-mevcut-durum.component.scss']
})
export class AracMevcutDurumComponent implements OnInit {
  parcalar: AracParcaDTO[];
  @Input() aracId: string;
  parcaDurumlari: AracParcaMevcutDurumDTO[];
  sonucGeldi: boolean;

  constructor(private parcaService: AracParcaService,
    private aracService: AracService,
    private aracParcaMevcutDurumSvc: AracParcaMevcutDurumService) {
    this.parcaService.getAll()
      .subscribe(parcalar => this.parcalar = parcalar);
  }

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.aracService.getAracParcaMevcutDurumlari(this.aracId)
      .subscribe(parcaDurumlari => {
        this.parcaDurumlari = parcaDurumlari;
        this.sonucGeldi = true;
      });
  }

  durumChange(e, parca: AracParcaDTO, buyukluk: string) {
    let durum = this.parcayaGoreGetir(parca);
    if (durum) {
      durum[buyukluk] = e;
      this.aracParcaMevcutDurumSvc.put(durum.id, durum)
        .subscribe(res => { this.getData() });
    } else {
      durum = new AracParcaMevcutDurumDTO();
      durum.aracId = this.aracId;
      durum.aracParcaId = parca.id;
      durum[buyukluk] = e;
      this.aracParcaMevcutDurumSvc.post(durum)
        .subscribe(res => { this.getData() });
    }
  }
  parcayaGoreGetir(parca: AracParcaDTO): AracParcaMevcutDurumDTO {
    const parcaDurum = this.parcaDurumlari ? this.parcaDurumlari.find(f => f.aracParcaId === parca.id) : null;
    return parcaDurum;
  }
}
