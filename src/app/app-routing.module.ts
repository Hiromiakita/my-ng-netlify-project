import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClimaLaboralComponent } from './clima-laboral/clima-laboral.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AnalisisGeneralComponent } from './analisis-general/analisis-general.component';
import { AnalisisDepartamentoComponent } from './analisis-departamento/analisis-departamento.component';
import { MedicionDeRiesgosComponent } from './medicion-de-riesgos/medicion-de-riesgos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'clima-laboral', component: ClimaLaboralComponent },
  { path: 'resultados', component: GraficasComponent},
  { path: 'resultados-dimosa/:ciudad', component: ResultadosComponent },
  { path: 'clima-laboral-dimosa-silao.html', component: ClimaLaboralComponent },
  { path: 'medicion-de-riesgos', component: MedicionDeRiesgosComponent},

  // Redirect Route
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }