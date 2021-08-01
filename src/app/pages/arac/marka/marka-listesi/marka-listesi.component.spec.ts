import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkaListesiComponent } from './marka-listesi.component';

describe('MarkaListesiComponent', () => {
  let component: MarkaListesiComponent;
  let fixture: ComponentFixture<MarkaListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkaListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkaListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
