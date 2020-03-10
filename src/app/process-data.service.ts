import { Injectable } from '@angular/core';
import { ReactivosService } from './reactivos.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessDataService {
  sheet: any;
  reactivos: any;

  constructor(
    private reactivosService: ReactivosService,
    ) { }

    set(data: any) {
      this.sheet =  data;
      this.reactivos = this.reactivosService.obtenerReactivos;
    }

    get reactivosMasAltos() {
      return this.construirTabla('top');
    }

    get reactivosMasBajos() {
      return this.construirTabla('lasts');
    }

    construirTabla(tipo: string) {
      let reactivo = '';
      let grupo = '';
      let calif = '';
      const inicio = tipo === 'top' ? 10 : 16;
      const fin = tipo === 'top' ? 15 : 20;
      const tabla = {
        headers: ['Reactivo', 'Categoría', 'Calificación'],
        data: [],
      };
      for ( let i = inicio; i < fin; i++ ) {
        calif = this.sheet.values[i][0];
        for (const j of this.reactivos) {
          if (j.numGrupo.toString() === this.sheet.values[i][1].toString()
          && j.numPreg.toString() === this.sheet.values[i][2].toString()) {
            grupo = j.grupoDeMedicion;
            reactivo = j.reactivo;
            tabla.data.push([reactivo, grupo, calif]);
          }
        }
      }
      return tabla;
    }
}
