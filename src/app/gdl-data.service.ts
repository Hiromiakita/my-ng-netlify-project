import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { resultadosGenerales, resultadosGeneralesSilao } from './readOnlyFiles/resultadosGenerales';
import { respuestasGenerales, respuestasGeneralesSilao } from './readOnlyFiles/respuestasGenerales';
import { infoGral, infoGralSilao } from './readOnlyFiles/infoGeneral';
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
import { resultadosPostVentaSilao } from './readOnlyFiles/resultadosPostVentaSilao';
import { resultadosPostVentaOperativaSilao } from './readOnlyFiles/resultadosPostVentaOperativaSilao'
import { resultadosComerVentasSilao } from './readOnlyFiles/resultadosComerVentasSilao'


import { ReactivosService } from './reactivos.service';


@Injectable({
  providedIn: 'root'
})
export class GdlDataService {

  constructor(private reactivosService: ReactivosService) { }

  getRespuestasGenerales() {
    return of(respuestasGenerales);
  }

  getRespuestasGeneralesSilao() {
    return of(respuestasGeneralesSilao);
  }

  getResultadosGenerales(ciudad) {
    if (ciudad === 'gdl') {
      return of(resultadosGenerales);
    }
    if (ciudad === 'silao') {
      return of(resultadosGeneralesSilao);
    }
  }

  getInfoGral(ciudad) {
    if (ciudad === 'gdl') {
      return of(infoGral);
    }
    if (ciudad === 'silao') {
      return of(infoGralSilao);
    }
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

  getResultadosPostVentaSilao() {
    return of(resultadosPostVentaSilao);
  }

  getResultadosPostVentaOperativaSilao() {
    return of(resultadosPostVentaOperativaSilao);
  }

  getResultadosComerVentasSilao() {
    return of(resultadosComerVentasSilao);
  }

  getRespuestasPregAbiertas(selection) {
    const resultados = [];
    for ( let i = 1; i < respuestasGenerales.values.length; i++) {
      resultados.push([i, respuestasGenerales.values[i][82 + selection]]);
    }
    return resultados;
  }
  getRespuestasPregAbiertasSilao(selection) {
    const resultados = [];
    for ( let i = 1; i < respuestasGeneralesSilao.values.length; i++) {
      resultados.push([i, respuestasGeneralesSilao.values[i][82 + selection]]);
    }
    return resultados;
  }
}
