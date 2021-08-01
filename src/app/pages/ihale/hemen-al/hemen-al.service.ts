import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../../@core/data/abstract/base-crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HemenAlService extends BaseCrudService {

  constructor(http: HttpClient) {
    super(http, 'HemenAl');
  }
}
