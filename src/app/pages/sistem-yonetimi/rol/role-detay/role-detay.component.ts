import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolDTO, RolService } from '@zyazilim/online-ihale-data';
import { RolExtendedDTO } from '../rol-model';

@Component({
  selector: 'role-detay',
  templateUrl: './role-detay.component.html',
  styleUrls: ['./role-detay.component.scss']
})
export class RoleDetayComponent implements OnInit {
  isCollapsed: boolean;
  @Input() id: number;
  model: RolDTO;
  keys: any[];
  constructor(private service: RolService,
    private activatedRoute: ActivatedRoute) {
    this.keys = RolExtendedDTO.columnDefs();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getData();
  }
  private getData() {
    this.service.get(this.id)
      .subscribe(data => {
        this.model = data;
      });
  }
}
