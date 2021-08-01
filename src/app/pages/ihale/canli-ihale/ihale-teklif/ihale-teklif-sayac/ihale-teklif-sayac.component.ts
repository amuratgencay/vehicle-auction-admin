import { Component, OnInit, Input } from '@angular/core';
import { IhaleTeklifServiceExtended, IhaleTeklifGeriSayim } from '@zyazilim/online-ihale-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ihale-teklif-sayac',
  templateUrl: './ihale-teklif-sayac.component.html',
  styleUrls: ['./ihale-teklif-sayac.component.scss']
})
export class IhaleTeklifSayacComponent implements OnInit {

  @Input() teklifVarMi: boolean;
  @Input() teklifSuresi: number;
  @Input() uzatmaSuresi: number;
  @Input() teklifYazisiGoster: boolean;
  colors = ['#E52A00', '#E05500', '#DC6400', '#D88F00', '#D4B900', '#BECF00', '#90CB00', '#63C700', '#38C300', '#0EBF00']
  teklifGeriSayim: IhaleTeklifGeriSayim;
  sessiz: boolean;

  baslangicSesiCalindi: boolean;
  ihaleTeklifGeriSayim$: Subscription;
  public get zamanYuzde(): number {
    return this.teklifGeriSayim ? (this.teklifGeriSayim.k / (this.teklifGeriSayim.k > this.uzatmaSuresi + 1 ? this.teklifSuresi : this.uzatmaSuresi)) * 100 : 0;
  }
  constructor(private ihaleTeklifService: IhaleTeklifServiceExtended) { }

  ngOnInit() {
    this.geriSayim();
  }

  geriSayim() {
    this.ihaleTeklifGeriSayim$ = this.ihaleTeklifService.ihaleTeklifGeriSayim().subscribe(data => {
      this.teklifGeriSayim = data;
    });
  }
  ngOnDestroy(): void {
    this.ihaleTeklifGeriSayim$ && this.ihaleTeklifGeriSayim$.unsubscribe();
  }
  getColor(number) {
    if (number > 10) {
      number = 10;
    }
    return this.colors[number - 1];
  }

}
