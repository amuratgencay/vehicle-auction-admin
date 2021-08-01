import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IhaleBilgisiService, EnumsService, IhaleBilgisiListeDTO } from '@zyazilim/online-ihale-data';
import { IhaleBilgisiListeExtendedDTO } from '../ihale-bilgisi-model';

@Component({
  selector: 'ihale-bilgisi-detay',
  templateUrl: './ihale-bilgisi-detay.component.html',
  styleUrls: ['./ihale-bilgisi-detay.component.scss']
})
export class IhaleBilgisiDetayComponent implements OnInit {
  @Input() id: string;
  model: IhaleBilgisiListeDTO;
  isCollapsed = false;
  keys: any[];
  readOnly = true;
  constructor(private ihaleService: IhaleBilgisiService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private enumsService: EnumsService) {
    this.keys = IhaleBilgisiListeExtendedDTO.columnDefs(this.enumsService);
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
