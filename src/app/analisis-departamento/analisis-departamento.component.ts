import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GdlDataService } from '../gdl-data.service';
import { ProcessDataService } from '../process-data.service';
import { ReactivosService } from '../reactivos.service';



@Component({
  selector: 'app-analisis-departamento',
  templateUrl: './analisis-departamento.component.html',
  styleUrls: ['./analisis-departamento.component.scss']
})
export class AnalisisDepartamentoComponent implements OnInit {

  promedioDepartamento;
  departamentoSeleccionado = 'ADMINISTRACIÓN COMERCIAL';
  tablaMenorDpto;
  tablaMayorDpto;
  departamentos;
  categorias = [];
  preguntasResultado = [];
  preguntas;
  nums;
  type = 'ColumnChart';
  data = [];
  columnNames = ['', 'Categoría'];
  options = {};
  width = 900;
  height = 400;
  infoGraficas = [];
  numerosArreglo = [];
  preguntasArreglo = [];

  constructor(
    private gdlService: GdlDataService,
    private processDataService: ProcessDataService,
    private reactivosService: ReactivosService
  ) { }

  ngOnInit(): void {
    this.obtenerResultadosDepartamento();
  }

  tablaPromedios(numeros) {
    this.infoGraficas = [];
    console.log("test");
    this.reactivosService.categorias.forEach((grupo: string, index: number) => {
      const categoriasKeys = Object.keys(grupo)[0];
      this.categorias.push(categoriasKeys);
    });
    const categoriasLength = Object.values(this.reactivosService.categorias).length;
    for (let i = 0; i < categoriasLength; i ++) {
      const test = [];
      for (let j = 0; j < numeros[i].length; j ++) {
        test.push([Object.values(Object.values(this.reactivosService.categorias[i])[0])[j], Number(numeros[i][j])]);
      }
      this.infoGraficas.push(test);
    }
    console.log("infoGraficas",this.infoGraficas.length)
  }

  obtenerResultadosDepartamento() {
    if (this.departamentoSeleccionado === 'ADMINISTRACIÓN COMERCIAL') {
      return this.gdlService.getResultadosAdminComercial().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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

    } else if (this.departamentoSeleccionado === 'ADMINISTRACIÓN POSTVENTA') {
      return this.gdlService.getResultadosAdminPostVenta().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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

    } else if (this.departamentoSeleccionado === 'POSTVENTA OPERATIVA (TECNICOS)') {
      return this.gdlService.getResultadosPostVentaOperativa().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'CAPITAL HUMANO') {
      return this.gdlService.getResultadosCapitalHumano().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'COMERCIAL/ VENTAS') {
      return this.gdlService.getResultadosComerVentas().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'CONTABILIDAD') {
      return this.gdlService.getResultadosContabilidad().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'DIRECCIÓN/ STAFF') {
      return this.gdlService.getResultadosDirStaff().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'LOGÍSTICA') {
      return this.gdlService.getResultadosLogistica().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'MANTENIMIENTO') {
      return this.gdlService.getResultadosMantenimiento().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'POSTVENTA OPERATIVA') {
      return this.gdlService.getResultadosPostVentaOperativa().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'TALLER Y ALMACÉN') {
      return this.gdlService.getResultadosTallerAlmacen().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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
    } else if (this.departamentoSeleccionado === 'TIC\'S') {
      return this.gdlService.getResultadosTics().subscribe(res => {
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
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

  onChange(evento) {
    this.departamentoSeleccionado = evento;
    this.obtenerResultadosDepartamento();
  }

}
