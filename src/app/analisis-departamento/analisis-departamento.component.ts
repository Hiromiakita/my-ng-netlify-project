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
  departamentoSeleccionado = "ADMINISTRACIÓN COMERCIAL";
  tablaMenorDpto;
  tablaMayorDpto;
  departamentos;
  categorias;
  infoGral;
  type = 'ColumnChart';
  data = [];
  columnNames = ['', 'Categoría'];
  options = {};
  width = 900;
  height = 400;



  constructor(
    private gdlService: GdlDataService,
    private processDataService: ProcessDataService,
    private reactivosService: ReactivosService
  ) { }

  ngOnInit(): void {
    this.obtenerInfoGeneral();
    this.obtenerResultadosDepartamento();
    this.departamentos = this.infoGral[4];
    this.obtenerReactivos();
  }

  obtenerInfoGeneral() {
    return this.gdlService.getInfoGral().subscribe(res => {
      console.log("response", res.values)
      this.infoGral = res.values;
      this.tablaPromedios(res.values);
    });
  }

  tablaPromedios(data) {
    for (let i = 0; i < data[4].length; i++) {
      this.data.push([
        data[4][i], Number(data[5][i])
      ]);
    }
  }

  
  obtenerReactivos(){
    this.categorias = this.reactivosService.obtenerListaDeCategorias;
    console.log("categorías", this.categorias)
    return this.reactivosService.obtenerListaDeCategorias;
  }
  obtenerResultadosDepartamento() {
    if (this.departamentoSeleccionado === "ADMINISTRACIÓN COMERCIAL") {
      return this.gdlService.getResultadosAdminComercial().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
        // this.tablaPromedios(res.values);
      });
    } else if (this.departamentoSeleccionado === "ADMINISTRACIÓN POSTVENTA") {
      return this.gdlService.getResultadosAdminPostVenta().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
        this.tablaMenorDpto = this.processDataService.reactivosMasBajos;
        this.tablaMayorDpto = this.processDataService.reactivosMasAltos;
      });
    } else if (this.departamentoSeleccionado === "POSTVENTA OPERATIVA (TECNICOS)") {
      return this.gdlService.getResultadosPostVentaOperativa().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "CAPITAL HUMANO") {
      return this.gdlService.getResultadosCapitalHumano().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "COMERCIAL/ VENTAS") {
      return this.gdlService.getResultadosComerVentas().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "CONTABILIDAD") {
      return this.gdlService.getResultadosContabilidad().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "DIRECCIÓN/ STAFF") {
      return this.gdlService.getResultadosDirStaff().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "LOGÍSTICA") {
      return this.gdlService.getResultadosLogistica().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "MANTENIMIENTO") {
      return this.gdlService.getResultadosMantenimiento().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "POSTVENTA OPERATIVA") {
      return this.gdlService.getResultadosPostVentaOperativa().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "TALLER Y ALMACÉN") {
      return this.gdlService.getResultadosTallerAlmacen().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    } else if (this.departamentoSeleccionado === "TIC'S") {
      return this.gdlService.getResultadosTics().subscribe(res => {
        console.log(res.values);
        this.promedioDepartamento = res.values[22][1];
        this.processDataService.set(res.values);
      });
    }
  }

  onChange(evento) {
    this.departamentoSeleccionado = evento;
    this.obtenerResultadosDepartamento();
  }

  onChanges() {
    this.obtenerResultadosDepartamento();
  }

}
