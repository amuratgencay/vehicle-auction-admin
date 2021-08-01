import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcerikComponent } from './icerik.component';

describe('IcerikComponent', () => {
  let component: IcerikComponent;
  let fixture: ComponentFixture<IcerikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcerikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcerikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
