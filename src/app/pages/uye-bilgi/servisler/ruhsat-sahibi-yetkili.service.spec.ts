import { TestBed } from '@angular/core/testing';

import { RuhsatSahibiYetkiliService } from './ruhsat-sahibi-yetkili.service';

describe('RuhsatSahibiYetkiliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuhsatSahibiYetkiliService = TestBed.get(RuhsatSahibiYetkiliService);
    expect(service).toBeTruthy();
  });
});
