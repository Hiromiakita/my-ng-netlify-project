import { Component, OnInit } from '@angular/core';
import { GoogleSheetsService } from '../google-sheets.service';
import { ProcessDataService } from '../process-data.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  sheet: any;
  tablaMenor;
  tablaMayor;
  introduccion = 'El resultado general de la encuesta del clima Organizacional aplicado en CAMARENA del periodo \
  2016 es de 6.71 puntos en una escala de 10 puntos. La areas encuestadas son "Ventas Nuevos", "Administración",\
  "Servicio" y "Refacciones". El area con mayor puntaje "Administración" con un resultado de 7.25 tenienno el area \
  de oportunidad en el rubro de "Instalaciones y recursos financieros" que dio un puntaje de 5.88, el area con \
  puntaje bajo es"Servicio" con un resultado de 5.53, teniendo el area de oportunidad en el rubro de "Percepción \
  sobre mi Jefe y/o Gerente" con un 4.26 de resultado.  Con la pregunta " Cual es la razón por la que trabajas en \
  la marca" 61 personas contestaron por "Sueldo", 50 personas contestaron "Lealtad a la empresa" y 12 persona \
  contestaron "No tengo otra opción"';

  title = 'Fruits distribution';
   type = 'ComboChart';
   data = [
      ['Apples', 3, 2, 2.5],
      ['Oranges', 2, 3, 2.5],
      ['Pears', 1, 5, 3],
      ['Bananas', 3, 9, 6],
      ['Plums', 4, 2, 3]
   ];
   columnNames = ['Fruits', 'Jane', 'Jone', 'Average'];
   options = {
      hAxis: {
         title: 'Person'
      },
      vAxis: {
         title: 'Fruits'
      },
      seriesType: 'bars',
      series: {2: {type: 'line'}}
   };
   width = 550;
   height = 400;
  constructor(
    private ggss: GoogleSheetsService,
    private processDataService: ProcessDataService
  ) { }

  ngOnInit(): void {
    this.obtenerResultados();
    this.tablaMenor = this.processDataService.reactivosMasBajos;
    this.tablaMayor = this.processDataService.reactivosMasAltos;
  }

  obtenerResultados() {
    return this.ggss.getSheet().subscribe(res => {
      this.processDataService.set(res);
    });
  }

}
