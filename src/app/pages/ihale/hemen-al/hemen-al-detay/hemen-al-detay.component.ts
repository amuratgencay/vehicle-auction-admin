import { Component, OnInit, Input } from '@angular/core';
import { HemenAlListeExtendedDTO } from '../hemen-al-model';
import { ActivatedRoute } from '@angular/router';
import { HemenAlListeDTO, HemenAlService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'hemen-al-detay',
  templateUrl: './hemen-al-detay.component.html',
  styleUrls: ['./hemen-al-detay.component.scss']
})
export class HemenAlDetayComponent implements OnInit {
  @Input() id: string;
  model: HemenAlListeDTO;
  isCollapsed = false;
  keys: any[];
  readOnly = true;
  constructor(private ihaleService: HemenAlService,
    private activatedRoute: ActivatedRoute
  ) {
    this.keys = HemenAlListeExtendedDTO.columnDefs();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.ihaleService.get(this.id)
      .subscribe(d => {
        this.model = d;
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
    this.ihaleService.put(this.id, this.model)
      .subscribe(res => {
        if (res && res.id) {
          this.readOnly = true;
        }
      });
  }

}
