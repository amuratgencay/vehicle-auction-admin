import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDetailLinkComponent } from './rol-detail-link.component';

describe('RolDetailLinkComponent', () => {
  let component: RolDetailLinkComponent;
  let fixture: ComponentFixture<RolDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
