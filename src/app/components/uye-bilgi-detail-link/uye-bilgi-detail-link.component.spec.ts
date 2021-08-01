import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UyeBilgiDetailLinkComponent } from './uye-bilgi-detail-link.component';

describe('UyeBilgiDetailLinkComponent', () => {
  let component: UyeBilgiDetailLinkComponent;
  let fixture: ComponentFixture<UyeBilgiDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UyeBilgiDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UyeBilgiDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
