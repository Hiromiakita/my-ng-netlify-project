import { Component, OnInit } from '@angular/core';
import { preguntasAbiertas } from '../clima-laboral/reactivos/preguntasAbiertas';
import { GdlDataService } from '../gdl-data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resumen-preguntas',
  templateUrl: './resumen-preguntas.component.html',
  styleUrls: ['./resumen-preguntas.component.scss']
})
export class ResumenPreguntasComponent implements OnInit {
  preguntasAbiertas = preguntasAbiertas;
  resultados: FormGroup;
  selected = 'preguntasAbiertas[0';
  tablaDeResultados: any;

  constructor(private gdlService: GdlDataService) {
    this.resultados = new FormGroup({
      preguntasAbiertasResultados: new FormControl(),
    });
   }

  ngOnInit(): void {
  }

  select($event) {
    this.selected = $event.target.selectedIndex;
    const pregunta = $event.target.value;
    this.tablaDeResultados = this.obtenerRespuestasPorPregunta(this.selected, pregunta);
  }

  get preguntaAbiertaResultado() { return this.resultados.get('preguntasAbiertasResultados').value; }

  obtenerRespuestasPorPregunta(selection, pregunta) {
    return {
      headers: ['', pregunta],
      data: this.gdlService.getRespuestasPregAbiertas(selection),
    };
  }

}
