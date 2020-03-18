import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { resultadosGenerales } from './readOnlyFiles/resultadosGenerales';
import { respuestasGenerales } from './readOnlyFiles/respuestasGenerales';
import { infoGral } from './readOnlyFiles/infoGeneral';
import { resultadosAdminComercial } from './readOnlyFiles/resultadosAdminComercial';
import { resultadosAdminPostVenta } from './readOnlyFiles/resultadosAdminPostVenta';
import { resultadosCapitalHumano } from './readOnlyFiles/resultadosCapitalHumano';
import { resultadosComerVentas } from './readOnlyFiles/resultadosComerVentas';
import { resultadosContabilidad } from './readOnlyFiles/resultadosContabilidad';
import { resultadosDirStaff } from './readOnlyFiles/resultadosDirStaff';
import { resultadosLogistica } from './readOnlyFiles/resultadosLogistica';
import { resultadosMantenimiento } from './readOnlyFiles/resultadosMantenimiento';
import { resultadosPostVentaOperativa } from './readOnlyFiles/resultadosPostVentaOperativa';
import { resultadosTallerAlmacen } from './readOnlyFiles/resultadosTallerAlmacen';
import { resultadosTics } from './readOnlyFiles/resultadosTics';
import { ReactivosService } from './reactivos.service';


@Injectable({
  providedIn: 'root'
})
export class GdlDataService {

  constructor(private reactivosService: ReactivosService) { }

  getRespuestasGenerales() {
    return of(respuestasGenerales);
  }

  getResultadosGenerales() {
    return of(resultadosGenerales);
  }

  getInfoGral() {
    return of(infoGral);
  }

  getResultadosDepto(depto: string) {
    if (depto === 'AdminComer') {
      return of(resultadosAdminComercial);
    }
  }

  getResultadosAdminComercial() {
    return of(resultadosAdminComercial);
  }

  getResultadosAdminPostVenta() {
    return of(resultadosAdminPostVenta);
  }

  getResultadosCapitalHumano() {
    return of(resultadosCapitalHumano);
  }
  getResultadosComerVentas() {
    return of(resultadosComerVentas);
  }

  getResultadosContabilidad() {
    return of(resultadosContabilidad);
  }

  getResultadosDirStaff() {
    return of(resultadosDirStaff);
  }

  getResultadosLogistica() {
    return of(resultadosLogistica);
  }

  getResultadosMantenimiento() {
    return of(resultadosMantenimiento);
  }

  getResultadosPostVentaOperativa() {
    return of(resultadosPostVentaOperativa);
  }

  getResultadosTallerAlmacen() {
    return of(resultadosTallerAlmacen);
  }

  getResultadosTics() {
    return of(resultadosTics);
  }


  getRespuestas(selection) {
    const resultados = [];
    for ( let i = 1; i < respuestasGenerales.values.length; i++) {
      resultados.push([i, respuestasGenerales.values[i][82 + selection]]);
    }
    return resultados;
  }
}
