import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhaleAracTeklifComponent } from './ihale-arac-teklif.component';

describe('IhaleAracTeklifComponent', () => {
  let component: IhaleAracTeklifComponent;
  let fixture: ComponentFixture<IhaleAracTeklifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhaleAracTeklifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhaleAracTeklifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
