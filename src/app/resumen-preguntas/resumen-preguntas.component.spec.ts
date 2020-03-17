import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPreguntasComponent } from './resumen-preguntas.component';

describe('ResumenPreguntasComponent', () => {
  let component: ResumenPreguntasComponent;
  let fixture: ComponentFixture<ResumenPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
