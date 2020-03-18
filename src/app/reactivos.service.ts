import { Injectable } from '@angular/core';
import { sentidoDePertenencia } from './clima-laboral/reactivos/sentidoDePertenencia';
import { desarrollo } from './clima-laboral/reactivos/desarrollo';
import { comunicacion } from './clima-laboral/reactivos/comunicacion';
import { condicionesGenerales } from './clima-laboral/reactivos/condicionesGenerales';
import { condicionesYherramientas } from './clima-laboral/reactivos/condicionesYherramientas';
import { eticaYvalores } from './clima-laboral/reactivos/eticaYvalores';
import { jefeInmediato } from './clima-laboral/reactivos/jefeInmediato';
import { pagoYprestaciones } from './clima-laboral/reactivos/pagoYprestaciones';
import { reconocimiento } from './clima-laboral/reactivos/reconocimiento';
import { responsabilidades } from './clima-laboral/reactivos/responsabilidades';
import { trabajoEnEquipo } from './clima-laboral/reactivos/trabajoEnEquipo';
import { acoso } from './clima-laboral/reactivos/acoso';
import { preguntasAbiertas } from './clima-laboral/reactivos/preguntasAbiertas';

@Injectable({
  providedIn: 'root'
})
export class ReactivosService {

  reactivos: { grupoDeMedicion: string, numGrupo: number, numPreg: number, reactivo: string, }[] = [];
  reactivosAbiertos: { grupoDeMedicion: string, numGrupo: number, numPreg: number, reactivo: string, }[] = [];
  categorias: any;
  categoriasList;

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
  readonly preguntasAbiertas = preguntasAbiertas;

  readonly values = [
    {value: 'Elige una opción', selected: true, disabled: true},
    {value: 'Nunca sucede', selected: false, disabled: false},
    {value: 'Algunas veces sucede', selected: false, disabled: false},
    {value: 'Con frecuencia sucede', selected: false, disabled: false},
    {value: 'Siempre sucede', selected: false, disabled: false},
  ];

  constructor() { }

  get obtenerReactivos() {
    this.initCategorias();
    this.initReactivos();
    return this.reactivos;
  }

  get obtenerPreguntasAbiertas() {
    this.initReactivosAbiertos();
    return this.reactivosAbiertos;
  }

  get obtenerListaDeCategorias(){
    return this.categoriasList = [
      'Sentido de pertenencia',
      'Trabajo en equipo',
      'Jefe Inmediato',
      'Responsabilidades',
      'Desarrollo',
      'Comunicación',
      'Condiciones y Herramientas',
      'Pago y prestaciones',
      'Condiciones Generales',
      'Reconocimiento',
      'Código de ética y valores',
      'Acoso'];
  }

  get obtenerCategorias(){
    return this.categorias;
  }
  
  initCategorias() {
    this.categorias = [
      { 'Sentido de pertenencia': this.sentidoDePertenencia, },
      { 'Trabajo en equipo': this.trabajoEnEquipo, },
      { 'Jefe Inmediato': this.jefeInmediato, },
      { Responsabilidades: this.responsabilidades, },
      { Desarrollo: this.desarrollo, },
      { Comunicación: this.comunicacion, },
      { 'Condiciones y Herramientas': this.condicionesYherramientas, },
      { 'Pago y prestaciones': this.pagoYprestaciones, },
      { 'Condiciones Generales': this.condicionesGenerales, },
      { Reconocimiento: this.reconocimiento, },
      { 'Código de ética y valores': this.eticaYvalores, },
      { Acoso: this.acoso, },
    ];
  }

  initReactivosAbiertos() {
    this.preguntasAbiertas.forEach((reactivo: string, index: number) => {
      this.reactivosAbiertos.push(
        {
          grupoDeMedicion: 'Preguntas abiertas',
          numGrupo: 13,
          numPreg: index + 1,
          reactivo,
        }
      );
    });
  }

  initReactivos() {
    this.categorias.forEach((grupo: string, index: number) => {
      const categoriasKeys = Object.keys(grupo)[0];
      grupo[categoriasKeys].forEach((pregunta: string, id: number) => {
        this.reactivos.push(
          {
            grupoDeMedicion: categoriasKeys,
            numGrupo: index + 1,
            numPreg: id + 1,
            reactivo: pregunta,
          }
        );
      });
    });
  }
}
