import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@ikinciel/core/abstract/base-list.component';
import { RolExtendedDTO } from '../rol-model';
import { RolDTO, RolService } from '@zyazilim/online-ihale-data';

@Component({
  selector: 'role-listesi',
  templateUrl: './role-listesi.component.html',
  styleUrls: ['./role-listesi.component.scss']
})
export class RoleListesiComponent extends BaseListComponent<RolDTO> implements OnInit {
  columns: any[];
  constructor(service: RolService) {
    super(service, RolDTO);
    this.settings.editPermission = '*';
    this.settings.createPermission = '*';
    this.settings.deletePermission = '*';
    this.columns = RolExtendedDTO.columnDefs();
  }
}
