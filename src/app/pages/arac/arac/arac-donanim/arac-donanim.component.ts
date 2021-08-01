import { Component, OnInit, Input } from '@angular/core';
import { DonanimDTO, AracDonanimDTO, DonanimService, AracDonanimService, AracService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'arac-donanim',
  templateUrl: './arac-donanim.component.html',
  styleUrls: ['./arac-donanim.component.scss']
})
export class AracDonanimComponent implements OnInit {
  @Input() aracId: string;
  donanimlar: DonanimDTO[];
  sonucGeldi: boolean;
  aracDonanimlari: AracDonanimDTO[];
  constructor(private donanimService: DonanimService,
    private aracService: AracService,
    private aracDonanimService: AracDonanimService) { }

  ngOnInit() {
    this.donanimService.getAll()
      .subscribe(data => {
        this.donanimlar = data;
      });
    this.getData();
  }
  private getData() {
    this.aracService.getDonanimlari(this.aracId)
      .subscribe(data => {
        this.aracDonanimlari = data;
        this.sonucGeldi = true;
      });
  }

  durumChange(e, donanim: DonanimDTO) {
    let aracDonanim = this.donanimaGoreGetir(donanim);
    if (typeof (e) === 'boolean') {
      if (!e) {
        this.aracDonanimService.delete(aracDonanim.id)
          .subscribe(res => {
            this.aracDonanimlari.splice(this.aracDonanimlari.indexOf(aracDonanim), 1)
          });
      } else {
        aracDonanim = new AracDonanimDTO({ donanimId: donanim.id, aracId: this.aracId, id: 0, aracAracNo: 0 });
        this.aracDonanimService.post(aracDonanim)
          .subscribe(res => {
            this.aracDonanimlari.push(res);
          });
      }
    }
  }
  donanimaGoreGetir(donanim: DonanimDTO): AracDonanimDTO {
    const parcaDurum = this.aracDonanimlari ? this.aracDonanimlari.find(f => f.donanimId === donanim.id) : null;
    return parcaDurum;
  }
}
