import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';
import { ProcessDataService } from '../process-data.service';
import { ReactivosService } from '../reactivos.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  sheet: any;
  tablaMenor;
  tablaMayor;
  nombreEmpresa: string;
  promedioGeneral: string;
  periodoActual: string;

  title = 'Categorías';
  type = 'ColumnChart';
  data = [];
  columnNames = ['', 'Categoría'];
   options = {};
   width = 900;
   height = 400;

  constructor(
    private ggss: GoogleSheetsService,
    private processDataService: ProcessDataService,
    private reactivos: ReactivosService,
  ) { }

  ngOnInit(): void {
    this.obtenerResultadosGenerales();
    this.obtenerInfoGeneral();
    this.tablaMenor = this.processDataService.reactivosMasBajos;
    this.tablaMayor = this.processDataService.reactivosMasAltos;
  }

  obtenerInfoGeneral() {
    return this.ggss.getInfoGral().subscribe(res => {
      this.nombreEmpresa = res.values[1][1];
      this.periodoActual = res.values[2][1];
      this.promedioGeneral = res.values[3][1];
      this.tablaPromedios();
    });
  }

  obtenerResultadosGenerales() {
    return this.ggss.getResultadosGenerales().subscribe(res => {
      this.processDataService.set(res.values);
    });
  }

  obtenerResultadosVentas() {}

  tablaPromedios() {
    const data = [];
    this.reactivos.categorias.forEach((grupo: string, index: number) => {
      const categoriasKeys = Object.keys(grupo)[0];
      data.push([categoriasKeys]);
    });
  }

  get textoIntroduccion() {
    return `El resultado general de la encuesta del clima Organizacional aplicado en ${this.nombreEmpresa} del periodo \
    ${this.periodoActual} es de ${this.promedioGeneral} puntos en una escala de 4 puntos. La areas encuestadas son "Ventas Nuevos",\
    "Administración", "Servicio" y "Refacciones". El area con mayor puntaje "Administración" con un resultado de 7.25 tenienno el area \
    de oportunidad en el rubro de "Instalaciones y recursos financieros" que dio un puntaje de 5.88, el area con \
    puntaje bajo es"Servicio" con un resultado de 5.53, teniendo el area de oportunidad en el rubro de "Percepción \
    sobre mi Jefe y/o Gerente" con un 4.26 de resultado.  Con la pregunta " Cual es la razón por la que trabajas en \
    la marca" 61 personas contestaron por "Sueldo", 50 personas contestaron "Lealtad a la empresa" y 12 persona \
    contestaron "No tengo otra opción"`;
  }

}
