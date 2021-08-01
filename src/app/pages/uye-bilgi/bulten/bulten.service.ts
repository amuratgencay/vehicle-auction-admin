import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../../../@core/data/abstract/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class BultenService extends BaseCrudService {
  constructor(http: HttpClient) {
    super(http, 'Bulten');
  }
}