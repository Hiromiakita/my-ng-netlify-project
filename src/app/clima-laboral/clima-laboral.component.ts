import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { sentidoDePertenencia } from './reactivos/sentidoDePertenencia';
import { desarrollo } from './reactivos/desarrollo';
import { comunicacion } from './reactivos/comunicacion';
import { condicionesGenerales } from './reactivos/condicionesGenerales';
import { condicionesYherramientas } from './reactivos/condicionesYherramientas';
import { eticaYvalores } from './reactivos/eticaYvalores';
import { jefeInmediato } from './reactivos/jefeInmediato';
import { pagoYprestaciones } from './reactivos/pagoYprestaciones';
import { reconocimiento } from './reactivos/reconocimiento';
import { responsabilidades } from './reactivos/responsabilidades';
import { trabajoEnEquipo } from './reactivos/trabajoEnEquipo';
import { acoso } from './reactivos/acoso';

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
  categorias: {};

  limiteInf = 0;
  limiteSup = 10;
  show = false;

  readonly sentidoDePertenencia = sentidoDePertenencia;
  readonly desarrollo = desarrollo;
  readonly comunicacion = comunicacion;
  readonly condicionesGenerales = condicionesGenerales;
  readonly condicionesYherramientas = condicionesYherramientas;
  readonly eticaYvalores = eticaYvalores;
  readonly jefeInmediato = jefeInmediato;
  readonly pagoYprestaciones = pagoYprestaciones;
  readonly reconocimiento = reconocimiento;
  readonly responsabilidades = responsabilidades;
  readonly trabajoEnEquipo = trabajoEnEquipo;
  readonly acoso = acoso;

  readonly values = [
    {value: 'Elige una opción', selected: true, disabled: true},
    {value: 'Nunca sucede', selected: false, disabled: false},
    {value: 'Algunas veces sucede', selected: false, disabled: false},
    {value: 'Con frecuencia sucede', selected: false, disabled: false},
    {value: 'Siempre sucede', selected: false, disabled: false},
  ];

  constructor(
    private formBuilder: FormBuilder,
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
    this.initCategories();
    this.initReactives();
    // this.reactivosRandom(this.reactivos);
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

  grupo(g) {
    if (g === 'Sentido de pertenencia') { return 0; }
    if (g === 'Trabajo en equipo') { return 1; }
    if (g === 'Jefe Inmediato') { return 2; }
    if (g === 'Responsabilidades') { return 3; }
    if (g === 'Desarrollo') { return 4; }
    if (g === 'Comunicación') { return 5; }
    if (g === 'Condiciones y Herramientas') { return 6; }
    if (g === 'Pago y prestaciones') { return 7; }
    if (g === 'Condiciones Generales') { return 8; }
    if (g === 'Reconocimiento') { return 9; }
    if (g === 'Código de ética y valores') { return 10; }
    if (g === 'Acoso') { return 11; }
  }

  initCategories() {
    this.categorias = {
      'Sentido de pertenencia': this.sentidoDePertenencia,
      'Trabajo en equipo': this.trabajoEnEquipo,
      'Jefe Inmediato': this.jefeInmediato,
      Responsabilidades: this.responsabilidades,
      Desarrollo: this.desarrollo,
      Comunicación: this.comunicacion,
      'Condiciones y Herramientas': this.condicionesYherramientas,
      'Pago y prestaciones': this.pagoYprestaciones,
      'Condiciones Generales': this.condicionesGenerales,
      Reconocimiento: this.reconocimiento,
      'Código de ética y valores': this.eticaYvalores,
      Acoso: this.acoso,
    };
  }

  initReactives() {
    const categoriasKeys = Object.keys(this.categorias);
    categoriasKeys.forEach((element: string, i: number) => {
      this.categorias[element].forEach((reactivo: string, index: number) => {
        this.reactivos.push(
          {
            grupoDeMedicion: element,
            numGrupo: this.grupo(element),
            numPreg: index,
            reactivo,
          }
        );
      });
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

  async onSubmit(FormClimaLaboral, $event) {
    const backupLI = this.limiteInf;
    const backupLS = this.limiteSup;

    this.limiteSup = 100;
    this.limiteInf = 0;
    this.show = true;

    setTimeout(() => {
      this.save($event, backupLI, backupLS);
    }, 6000);
  }

  save($event, backupLI, backupLS) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyr-MmF0E1FVjOU9jWMSonYVKf608KivK5UmFuzPoDwU1XBBQ6U/exec';
    const form = document.forms['submit-to-google-sheet'];
    $event.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        this.limiteInf = backupLI;
        this.limiteSup = backupLS;
        this.show = false;
        console.log('Success!', response);
        document.getElementById('modalTitle').innerHTML = 'Guardado';
        document.getElementById('modalBody').innerHTML = 'Gracias por su participación';
        document.getElementById('modalBtn').innerHTML = 'Ok.';
        document.getElementById('modalBtn').className = 'btn btn-primary';
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
