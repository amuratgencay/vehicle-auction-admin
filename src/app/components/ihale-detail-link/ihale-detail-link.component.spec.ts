import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhaleDetailLinkComponent } from './ihale-detail-link.component';

describe('IhaleDetailLinkComponent', () => {
  let component: IhaleDetailLinkComponent;
  let fixture: ComponentFixture<IhaleDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhaleDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhaleDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
