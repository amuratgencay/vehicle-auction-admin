import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelListesiComponent } from './model-listesi.component';

describe('ModelListesiComponent', () => {
  let component: ModelListesiComponent;
  let fixture: ComponentFixture<ModelListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
