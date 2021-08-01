import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '@ikinciel/core/data/abstract/base-crud.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SistemAyarlariService extends BaseCrudService {
  constructor(http: HttpClient) {
    super(http, 'SistemAyarlari');
  }
  getSiteGuncelleniyor(): Observable<boolean> {
    return this.http.get<{ deger: string }>(`${this.baseUrl}SistemAyarlari/siteGuncelleniyor`).pipe(map(d => {
      return d.deger === 'true';
    }));
  }
  putSiteGuncelleniyor(deger: boolean): Observable<boolean> {
    return this.http.put<{ deger: string }>(`${this.baseUrl}SistemAyarlari/siteGuncelleniyor`, { deger: deger }).pipe(map(d => {
      return d.deger === 'true';
    }));
  }
}