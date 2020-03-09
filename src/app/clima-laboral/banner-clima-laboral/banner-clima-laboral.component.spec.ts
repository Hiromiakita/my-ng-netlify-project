import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerClimaLaboralComponent } from './banner-clima-laboral.component';

describe('BannerClimaLaboralComponent', () => {
  let component: BannerClimaLaboralComponent;
  let fixture: ComponentFixture<BannerClimaLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerClimaLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerClimaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
