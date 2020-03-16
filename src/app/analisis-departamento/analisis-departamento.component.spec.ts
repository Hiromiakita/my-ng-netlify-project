import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDepartamentoComponent } from './analisis-departamento.component';

describe('AnalisisDepartamentoComponent', () => {
  let component: AnalisisDepartamentoComponent;
  let fixture: ComponentFixture<AnalisisDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
