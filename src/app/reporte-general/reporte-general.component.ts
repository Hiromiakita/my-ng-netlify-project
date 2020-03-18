import { Component, OnInit } from '@angular/core';
import { resultadosGenerales } from '../readOnlyFiles/infoGeneral';
import { metricasGenerales } from '../readOnlyFiles/metricasGenerales';
import { ReactivosService } from '../reactivos.service';

@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.scss']
})
export class ReporteGeneralComponent implements OnInit {
  resultadosGenerales = resultadosGenerales;
  metricasGenerales = metricasGenerales;
  categoriasLista = [];
  tabla: {headers: [], data: []};
  departamentos = [];
  promedioGeneral: string;
  promediosPorDepto = [];

  title = 'Categorías';
  type = 'BarChart';
  data = [];
  columnNames = ['', 'Departamentos'];
  width = 1100;
  height = 600;
  options = {
    hAxis: {
       title: 'Promedios'
    },
    vAxis: {
       title: 'Departamentos'
    },
    seriesType: 'bars',
    series: {2: {type: 'line'}}
 };

  tituloGrupos = 'Grupos';
  tipoGrupos = 'ColumnChart';
  datosGrupos = [];
  columnasGrupos = ['Promedios', 'Categorías'];
  anchoGrupos = 1100;
  altoGrupos = 500;

  constructor(private reactivosService: ReactivosService) { }

  ngOnInit(): void {
    this.departamentos.push(this.resultadosGenerales.values[5]);
    this.promedioGeneral = this.resultadosGenerales.values[3][1];
    this.promediosPorDepto.push(this.resultadosGenerales.values[6]);
    this.graficaCategorías();
    this.graficaGrupos();
    this.tablaCategoriasGrupos();
  }

  obtenerCategorias() {
    this.categoriasLista = this.reactivosService.obtenerListaDeCategorias;
  }

  graficaCategorías() {
    this.departamentos[0].forEach((depto, index) => {
      this.data.push([depto, Number(this.promediosPorDepto[0][index])]);
    });
  }

  graficaGrupos() {
    for (let i = 0; i < this.reactivosService.obtenerListaDeCategorias.length; i++) {
      this.datosGrupos.push([this.reactivosService.obtenerListaDeCategorias[i], Number(this.metricasGenerales.values[i + 25][1])]);
    }
  }

  tablaCategoriasGrupos() {
  }

}
