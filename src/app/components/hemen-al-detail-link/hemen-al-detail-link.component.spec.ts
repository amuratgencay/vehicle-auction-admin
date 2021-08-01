import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemenAlDetailLinkComponent } from './hemen-al-detail-link.component';

describe('HemenAlDetailLinkComponent', () => {
  let component: HemenAlDetailLinkComponent;
  let fixture: ComponentFixture<HemenAlDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemenAlDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemenAlDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
