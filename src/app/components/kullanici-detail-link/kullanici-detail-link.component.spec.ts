import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciDetailLinkComponent } from './kullanici-detail-link.component';

describe('KullaniciDetailLinkComponent', () => {
  let component: KullaniciDetailLinkComponent;
  let fixture: ComponentFixture<KullaniciDetailLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullaniciDetailLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
