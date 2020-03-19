import { Component, OnInit } from '@angular/core';
import { GdlDataService } from '../gdl-data.service';
import { ProcessDataService } from '../process-data.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  tablaMenor;
  tablaMayor;
  nombreEmpresa: string;
  promedioGeneral: string;
  periodoActual: string;
  departamentos = '';
  departamentoMasAlto: string;
  calficacionDepartamentoMasAlto: string;
  departamentoMasBajo: string;
  calficacionDepartamentoMasBajo: string;
  analisisGral = true;
  analisisDeptos = false;
  reporteGral = false;
  resumenPregAbiertasr = false;

  constructor(
    private gdlService: GdlDataService,
    private processDataService: ProcessDataService
  ) { }

  ngOnInit(): void {
    this.obtenerResultadosGenerales();
    this.obtenerInfoGeneral();
    this.tablaMenor = this.processDataService.reactivosMasBajos;
    this.tablaMayor = this.processDataService.reactivosMasAltos;
  }

  obtenerInfoGeneral() {
    return this.gdlService.getInfoGral().subscribe(res => {
      this.nombreEmpresa = res.values[0][1];
      this.periodoActual = res.values[1][1];
      this.promedioGeneral = res.values[2][1];
      for (let i = 0; i < res.values[4].length; i++) {
        if (i < res.values[4].length - 2) {
          this.departamentos += res.values[4][i] + ', ';
        } else if (i < res.values[4].length - 1) {
          this.departamentos += res.values[4][i] + ' y ';
        } else {
          this.departamentos += res.values[4][i];
        }
      }
      this.departamentoMasAlto = res.values[7][2];
      this.calficacionDepartamentoMasAlto = res.values[7][1];
      this.departamentoMasBajo = res.values[8][2];
      this.calficacionDepartamentoMasBajo = res.values[8][1];
    });
  }

  obtenerResultadosGenerales() {
    return this.gdlService.getResultadosGenerales().subscribe(res => {
      this.processDataService.set(res.values);
    });
  }

  get textoIntroduccion() {
    return `El resultado general de la encuesta del clima Organizacional aplicado en ${this.nombreEmpresa} del periodo \
    ${this.periodoActual} es de ${this.promedioGeneral} puntos en una escala de 4 puntos. \
    Los departamentos encuestados son: ${this.departamentos}.`;
  }

  handleSelection($event): void {
    this.analisisGral = false;
    this.analisisDeptos = false;
    this.reporteGral = false;
    this.resumenPregAbiertasr = false;
    this[$event] = true;
  }
}
