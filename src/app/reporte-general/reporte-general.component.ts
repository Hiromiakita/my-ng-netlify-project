import { Component, OnInit } from '@angular/core';
import { infoGral } from '../readOnlyFiles/infoGeneral';
import { resultadosGenerales } from '../readOnlyFiles/resultadosGenerales';
import { ReactivosService } from '../reactivos.service';
import { GdlDataService } from '../gdl-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.scss']
})
export class ReporteGeneralComponent implements OnInit {
  ciudad: string;
  resultadosGenerales = infoGral;
  metricasGenerales = resultadosGenerales;
  categoriasLista = [];
  departamentos = [];
  promedioGeneral: string;
  promediosPorDepto = [];
  promedioGral: string;
  numerosArreglo = [];
  infoGraficas = [];
  categorias = [];

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

  optionsDpto = {};
  typeDpto = 'ColumnChart';
  columnNamesDpto = ['', 'Reactivos'];


  tituloGrupos = 'Grupos';
  tipoGrupos = 'ColumnChart';
  datosGrupos = [];
  columnasGrupos = ['Promedios', 'Categorías'];
  anchoGrupos = 1100;
  altoGrupos = 500;

  tabla: {headers: any[], data: []};

  constructor(
    private reactivosService: ReactivosService,
    private gdlService: GdlDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ciudad = this.route.snapshot.paramMap.get('ciudad');
    this.departamentos.push(this.resultadosGenerales.values[4]);
    this.promedioGeneral = this.resultadosGenerales.values[2][1];
    this.promediosPorDepto.push(this.resultadosGenerales.values[5]);
    this.graficaCategorías();
    this.graficaGrupos();
    this.obtenerCategorias();
    this.tablaCategoriasGrupos();
    this.obtenerResultadosDepartamento();

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
    this.tabla = {
      headers : [ this.categoriasLista ],
      data: [],
    };
    // console.log(this.metricasGenerales.values);
    // this.metricasGenerales.forEach(element => {
    // });
  }

  tablaPromedios(numeros) {
    this.infoGraficas = [];
    this.reactivosService.categorias.forEach((grupo: string, index: number) => {
      const categoriasKeys = Object.keys(grupo)[0];
      this.categorias.push(categoriasKeys);
    });
    const categoriasLength = Object.values(this.reactivosService.categorias).length;
    for (let i = 0; i < categoriasLength; i ++) {
      const data = [];
      for (let j = 0; j < numeros[i].length; j ++) {
        data.push([Object.values(Object.values(this.reactivosService.categorias[i])[0])[j], Number(numeros[i][j])]);
      }
      this.infoGraficas.push(data);
    }
  }

  obtenerResultadosDepartamento() {
      return this.gdlService.getResultadosGenerales(this.ciudad).subscribe(res => {
        this.promedioGral = res.values[22][1];
        let preg = [];
        for (let i = 4; i <= 8; i++) {
           preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];

        for (let i = 9; i <= 15; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];

        for (let i = 16; i <= 31; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 32; i <= 35; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 36; i <= 42; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 43; i <= 48; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 49; i <= 60; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 61; i <= 63; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 64; i <= 69; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 70; i <= 73; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 74; i <= 78; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        for (let i = 79; i <= 81; i++) {
          preg.push(res.values[9][i]);
        }
        this.numerosArreglo.push(preg);
        preg = [];
        this.tablaPromedios(this.numerosArreglo);
      });

    }

}
