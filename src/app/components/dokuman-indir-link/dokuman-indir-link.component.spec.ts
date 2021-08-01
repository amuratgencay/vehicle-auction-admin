import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumanIndirLinkComponent } from './dokuman-indir-link.component';

describe('DokumanIndirLinkComponent', () => {
  let component: DokumanIndirLinkComponent;
  let fixture: ComponentFixture<DokumanIndirLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumanIndirLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumanIndirLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
