import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhsatSahibiYetkilileriComponent } from './ruhsat-sahibi-yetkilileri.component';

describe('RuhsatSahibiYetkilileriComponent', () => {
  let component: RuhsatSahibiYetkilileriComponent;
  let fixture: ComponentFixture<RuhsatSahibiYetkilileriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuhsatSahibiYetkilileriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuhsatSahibiYetkilileriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
