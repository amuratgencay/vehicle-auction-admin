import { Injectable } from '@angular/core';
import { BaseCrudService } from '@ikinciel/core/data/abstract/base-crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KullaniciRolService extends BaseCrudService {
  constructor(http: HttpClient) {
    super(http, 'kullaniciRol');
  }
}