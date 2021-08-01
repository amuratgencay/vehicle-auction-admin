import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AracDetailLinkComponent } from './arac-detail-link.component';

describe('AracDetailLinkComponent', () => {
  let component: AracDetailLinkComponent;
  let fixture: ComponentFixture<AracDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AracDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
