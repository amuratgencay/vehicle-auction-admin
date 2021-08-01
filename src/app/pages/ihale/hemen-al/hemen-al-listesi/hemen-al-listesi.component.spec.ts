import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemenAlListesiComponent } from './hemen-al-listesi.component';

describe('HemenAlListesiComponent', () => {
  let component: HemenAlListesiComponent;
  let fixture: ComponentFixture<HemenAlListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemenAlListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemenAlListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
