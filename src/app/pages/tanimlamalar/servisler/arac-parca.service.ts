import { Injectable } from '@angular/core';
import { BaseCrudService } from '@ikinciel/core/data/abstract/base-crud.service';
import { HttpClient } from '@angular/common/http';
import { AracParca } from '../arac-parca/arac-parca-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AracParcaService extends BaseCrudService {

  constructor(http: HttpClient) {
    super(http, 'AracParca');
  }
  getEkspertizOlanlar(odataQs: string = null) {
    odataQs = odataQs ? '?' + odataQs : '';
    return this.http.get<Array<AracParca>>(`${this.baseUrl}${this.path}/EkspertizOlanlar${odataQs}`).pipe(
      map(m => {
        const data = m.map(p => new AracParca().deserialize(p));
        return data;
      })
    );
  }
}