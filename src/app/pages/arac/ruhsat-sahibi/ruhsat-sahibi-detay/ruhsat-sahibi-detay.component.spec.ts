import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhsatSahibiDetayComponent } from './ruhsat-sahibi-detay.component';

describe('RuhsatSahibiDetayComponent', () => {
  let component: RuhsatSahibiDetayComponent;
  let fixture: ComponentFixture<RuhsatSahibiDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuhsatSahibiDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuhsatSahibiDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
