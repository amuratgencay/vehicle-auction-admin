import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanliIhaleComponent } from './canli-ihale.component';

describe('CanliIhaleComponent', () => {
  let component: CanliIhaleComponent;
  let fixture: ComponentFixture<CanliIhaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanliIhaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanliIhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
