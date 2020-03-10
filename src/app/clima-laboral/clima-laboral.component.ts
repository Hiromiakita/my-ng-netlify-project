import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { ReactivosService } from '../reactivos.service';

@Component({
  selector: 'app-clima-laboral',
  templateUrl: './clima-laboral.component.html',
  styleUrls: ['./clima-laboral.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClimaLaboralComponent implements OnInit {
  FormClimaLaboral: FormGroup;
  opcMultiple: FormArray;
  reactivos: { grupoDeMedicion: string, numGrupo: number, numPreg: number, reactivo: string, }[] = [];

  limiteInf = 0;
  limiteSup = 10;
  show = false;

  readonly values = [
    {value: '', selected: true, disabled: false},
    {value: 'Nunca sucede', selected: false, disabled: false},
    {value: 'Algunas veces sucede', selected: false, disabled: false},
    {value: 'Con frecuencia sucede', selected: false, disabled: false},
    {value: 'Siempre sucede', selected: false, disabled: false},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private reactivosService: ReactivosService,
  ) {
    this.FormClimaLaboral = this.formBuilder.group({
      informacionPersonal: this.formBuilder.group({
        depto: [''],
        antiguedad: [''],
        rangoEdad: [''],
      }),
      opcMultiple: this.formBuilder.array([]),
      pregAbiertas: this.formBuilder.array([]),
    });
  }

  ngOnInit() {
    this.reactivos = this.reactivosService.obtenerReactivos;
    this.reactivosRandom(this.reactivos);
    this.setFormControls();
  }

  createItem(grupoDeMedicion, grupo, pregunta, reactivo) {
    return this.formBuilder.group({
      grupoDeMedicion: [grupoDeMedicion, Validators.required],
      numGrupo: [grupo, Validators.required],
      numPreg: [pregunta, Validators.required],
      reactivo: [reactivo, Validators.required],
      respuesta: ['', Validators.required],
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
    this.opcMultiple = this.FormClimaLaboral.get('opcMultiple') as FormArray;
    this.reactivos.forEach(reactivo => {
      this.opcMultiple.push(this.createItem(reactivo.grupoDeMedicion, reactivo.numGrupo, reactivo.numPreg, reactivo.reactivo));
    });
  }

  next() {
    this.limiteInf = this.limiteSup;
    this.limiteSup += 10;
    this.show = false;
  }

  prev() {
    this.limiteSup = this.limiteInf;
    this.limiteInf -= 10;
    this.show = false;
  }

  onSubmit($event) {
    const backupLI = this.limiteInf;
    const backupLS = this.limiteSup;

    this.limiteSup = 100;
    this.limiteInf = 0;
    this.show = true;

    setTimeout(() => {
      this.save($event, backupLI, backupLS);
    }, 600);
  }

  save($event, backupLI, backupLS) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzk2ujvnFmYh3I-A6a0nLPlX06aFEUC45C1kkldcA/exec';
    const form = document.forms['submit-to-google-sheet'];
    // console.log(form);
    $event.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        this.limiteInf = 0;
        this.limiteSup = 10;
        this.show = false;
        console.log('Success!', response);
        document.getElementById('modalTitle').innerHTML = 'Guardado';
        document.getElementById('modalBody').innerHTML = 'Gracias por su participación';
        document.getElementById('modalBtn').innerHTML = 'Ok.';
        document.getElementById('modalBtn').className = 'btn btn-primary';
        this.FormClimaLaboral.reset();
    })
    .catch(error => {
        this.limiteInf = backupLI;
        this.limiteSup = backupLS;
        this.show = false;
        console.error('Error!', error.message);
        document.getElementById('modalTitle').innerHTML = 'Error';
        document.getElementById('modalBody').innerHTML = 'Hubo un error en su envío. Intente de nuevo.';
        document.getElementById('modalBtn').innerHTML = 'Cerrar';
        document.getElementById('modalBtn').className = 'btn btn-secondary';
    });
  }

}
