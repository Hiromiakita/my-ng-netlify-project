import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicionDeRiesgosComponent } from './medicion-de-riesgos.component';

describe('MedicionDeRiesgosComponent', () => {
  let component: MedicionDeRiesgosComponent;
  let fixture: ComponentFixture<MedicionDeRiesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicionDeRiesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicionDeRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
