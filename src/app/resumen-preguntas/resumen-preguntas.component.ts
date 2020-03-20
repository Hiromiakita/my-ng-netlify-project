import { Component, OnInit } from '@angular/core';
import { preguntasAbiertas } from '../clima-laboral/reactivos/preguntasAbiertas';
import { GdlDataService } from '../gdl-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


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
  ciudad: string;
  preguntasAbiertasData = []

  constructor(
    private gdlService: GdlDataService,
    private route: ActivatedRoute) {
    this.resultados = new FormGroup({
      preguntasAbiertasResultados: new FormControl(),
    });
   }

  ngOnInit(): void {
    this.ciudad = this.route.snapshot.paramMap.get('ciudad');
  }

  select($event) {
    this.selected = $event.target.selectedIndex;
    const pregunta = $event.target.value;
    this.tablaDeResultados = this.obtenerRespuestasPorPregunta(this.selected, pregunta);
  }

  get preguntaAbiertaResultado() { return this.resultados.get('preguntasAbiertasResultados').value; }

  obtenerRespuestasPorPregunta(selection, pregunta) {
    if(this.ciudad === "gdl") {
      this.preguntasAbiertasData = this.gdlService.getRespuestasPregAbiertas(selection);
    } else if (this.ciudad === "silao"){
      this.preguntasAbiertasData = this.gdlService.getRespuestasPregAbiertasSilao(selection);
    }
    return {
      headers: ['', pregunta],
      data: this.preguntasAbiertasData,
    };
  }

}
