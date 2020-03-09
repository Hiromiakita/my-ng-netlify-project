import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClimaLaboralComponent } from './header-clima-laboral.component';

describe('HeaderClimaLaboralComponent', () => {
  let component: HeaderClimaLaboralComponent;
  let fixture: ComponentFixture<HeaderClimaLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderClimaLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderClimaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
