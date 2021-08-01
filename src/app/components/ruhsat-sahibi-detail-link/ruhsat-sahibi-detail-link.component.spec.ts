import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhsatSahibiDetailLinkComponent } from './ruhsat-sahibi-detail-link.component';

describe('RuhsatSahibiDetailLinkComponent', () => {
  let component: RuhsatSahibiDetailLinkComponent;
  let fixture: ComponentFixture<RuhsatSahibiDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuhsatSahibiDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuhsatSahibiDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
