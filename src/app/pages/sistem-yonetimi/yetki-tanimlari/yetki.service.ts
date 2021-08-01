import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../../@core/data/abstract/base-crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolYetki } from '../models/rol-yetki-model';

@Injectable({
  providedIn: 'root'
})
export class YetkiService extends BaseCrudService {

  constructor(http: HttpClient) {
    super(http, 'Yetki');
  }
  getRoller(yetkiId: number): Observable<RolYetki[]> {
    return this.http.get<RolYetki[]>(`${this.baseUrl}${this.path}/${yetkiId}/Roller`);
  }
}