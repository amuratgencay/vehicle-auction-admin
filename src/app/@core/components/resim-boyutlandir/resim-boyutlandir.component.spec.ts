import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResimBoyutlandirComponent } from './resim-boyutlandir.component';

describe('ResimBoyutlandirComponent', () => {
  let component: ResimBoyutlandirComponent;
  let fixture: ComponentFixture<ResimBoyutlandirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResimBoyutlandirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResimBoyutlandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
