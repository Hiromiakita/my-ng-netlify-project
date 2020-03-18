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


  constructor(
    private ggss: GdlDataService,
    private processDataService: ProcessDataService
  ) { }

  ngOnInit(): void {
    this.obtenerResultadosGenerales();
    this.obtenerInfoGeneral();
    this.tablaMenor = this.processDataService.reactivosMasBajos;
    console.log("tabla menor ",this.tablaMenor);
    this.tablaMayor = this.processDataService.reactivosMasAltos;
    console.log("tabla mayor ",this.tablaMayor);
  }

  obtenerInfoGeneral() {
    return this.ggss.getInfoGral().subscribe(res => {
      console.log("INFO GRAL", res.values)
      this.nombreEmpresa = res.values[0][1];
      this.periodoActual = res.values[2][1];
      this.promedioGeneral = res.values[3][1];
      console.log(res.values);
    });
  }

  obtenerResultadosGenerales() {
    return this.ggss.getResultadosGenerales().subscribe(res => {
      this.processDataService.set(res.values);
    });
  }

  obtenerResultadosVentas() {}


  get textoIntroduccion() {
    return `El resultado general de la encuesta del clima Organizacional aplicado en ${this.nombreEmpresa} - Guadalajara del periodo \
    ${this.periodoActual} es de ${this.promedioGeneral} puntos en una escala de 4 puntos. Los departamentos encuestados son "Ventas Nuevos",\
    "Administración", "Servicio" y "Refacciones". El area con mayor puntaje "Administración" con un resultado de 7.25 tenienno el area \
    de oportunidad en el rubro de "Instalaciones y recursos financieros" que dio un puntaje de 5.88, el area con \
    puntaje bajo es"Servicio" con un resultado de 5.53, teniendo el area de oportunidad en el rubro de "Percepción \
    sobre mi Jefe y/o Gerente" con un 4.26 de resultado.  Con la pregunta " Cual es la razón por la que trabajas en \
    la marca" 61 personas contestaron por "Sueldo", 50 personas contestaron "Lealtad a la empresa" y 12 persona \
    contestaron "No tengo otra opción"`;
  }

}
