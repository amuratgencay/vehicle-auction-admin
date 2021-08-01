import { Injectable } from '@angular/core';
import { BaseCrudService } from '@ikinciel/core/data/abstract/base-crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UyeBilgi } from '../../uye-bilgi/uye/uye-bilgi-model';
import { map } from 'rxjs/operators';
import { RuhsatSahibiYetkili } from '../../uye-bilgi/models/ruhsat-sahibi-yetkili-model';
import { RuhsatSahibiHesap } from './ruhsat-sahibi-hesaplari/ruhsat-sahibi-hesap-model';

@Injectable({
  providedIn: 'root'
})
export class RuhsatSahibiService extends BaseCrudService {
  constructor(http: HttpClient) {
    super(http, 'RuhsatSahibi');
  }
  getYetkilileri(id: any): Observable<RuhsatSahibiYetkili[]> {
    return this.http.get<RuhsatSahibiYetkili[]>(`${this.baseUrl}${this.path}/${id}/Yetkilileri`).pipe(
      map(m => {
        return m.map(u => new RuhsatSahibiYetkili().deserialize(u));
      })
    );
  }
  getHesaplari(id: any): Observable<RuhsatSahibiHesap[]> {
    return this.http.get<RuhsatSahibiHesap[]>(`${this.baseUrl}${this.path}/${id}/Hesaplari`).pipe(
      map(m => {
        return m.map(u => new RuhsatSahibiHesap().deserialize(u));
      })
    );
  }
}
