import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElitUyelikTalebi } from './elit-uyelik-talebi-model';
import { BaseCrudService } from '../../../../@core/data/abstract/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ElitUyelikTalepService extends BaseCrudService {
  constructor(http: HttpClient) {
    super(http, 'ElitUyelikTalep');
  }

  getOnayBekleyenler(odataQs: string = ''): Observable<{ items: Array<ElitUyelikTalebi>, count: number }> {
    odataQs = odataQs ? '?' + odataQs : '';
    return this.http.get<{ items: Array<ElitUyelikTalebi>, count: number }>(`${this.baseUrl}${this.path}/OnayBekleyenler${odataQs}`).pipe(
      map(m => {
        const data = { items: m.items.map(p => new ElitUyelikTalebi().deserialize(p)), count: m.count }
        return data;
      })
    );
  }
  onayla(id: string, data): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${this.path}/${id}/Onayla`, data);
  }
  reddet(id: string, data): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${this.path}/${id}/Reddet`, data);
  }
}