import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemenAlDetayComponent } from './hemen-al-detay.component';

describe('HemenAlDetayComponent', () => {
  let component: HemenAlDetayComponent;
  let fixture: ComponentFixture<HemenAlDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemenAlDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemenAlDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
