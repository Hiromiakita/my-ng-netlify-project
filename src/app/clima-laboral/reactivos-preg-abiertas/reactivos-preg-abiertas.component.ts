import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactivos-preg-abiertas',
  templateUrl: './reactivos-preg-abiertas.component.html',
  styleUrls: ['./reactivos-preg-abiertas.component.scss']
})
export class ReactivosPregAbiertasComponent implements OnInit {
  @Input () FormClimaLaboral: FormGroup;
  @Input () limiteInf: number;
  @Input () limiteSup: number;
  pregAbiertas: FormArray;
  reactivos: { grupoDeMedicion: string, numGrupo: number, numPreg: number, reactivo: string, }[] = [];

  preguntasAbiertas = [
    'Si tú fueras el director de la compañía, ¿qué acciones tu gustaría emprender?',
    'Si tu pudieras hacer un cambio en la empresa, ¿qué cambio harías?',
    '¿Qué recomendación le darías a tu jefe inmediato?',
    'Para tus compañeros, ¿qué mensaje te gustaría que ellos tomen en cuenta?',
    'Con tus palabras puedes describirnos la Misión, Visión y Valores de la empresa',
    '¿Qué otro comentario quieres compartir?',
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.pregAbiertas = this.FormClimaLaboral.get('pregAbiertas') as FormArray;
    this.initReactives();
    this.reactivosRandom(this.reactivos);
    this.setFormControls();
  }

  createItem(grupoDeMedicion, grupo, pregunta, reactivo) {
    return this.fb.group({
      grupoDeMedicion: [grupoDeMedicion, Validators.required],
      numGrupo: [grupo, Validators.required],
      numPreg: [pregunta, Validators.required],
      reactivo: [reactivo, Validators.required],
      respuesta: ['', Validators.required],
    });
  }

  initReactives() {
    this.preguntasAbiertas.forEach((reactivo: string, index: number) => {
      this.reactivos.push(
        {
          grupoDeMedicion: 'Preguntas abiertas',
          numGrupo: 13,
          numPreg: index + 1,
          reactivo,
        }
      );
    });
  }

  reactivosRandom(reactivosRandom) {
    for (let i = reactivosRandom.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = reactivosRandom[i];
      reactivosRandom[i] = reactivosRandom[j];
      reactivosRandom[j] = temp;
    }
    return reactivosRandom;
  }

  setFormControls() {
    this.reactivos.forEach(reactivo => {
      this.pregAbiertas.push(this.createItem(reactivo.grupoDeMedicion, reactivo.numGrupo, reactivo.numPreg, reactivo.reactivo));
    });
  }

}
