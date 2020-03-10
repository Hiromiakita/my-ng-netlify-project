import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClimaLaboralComponent } from './clima-laboral/clima-laboral.component';
import { GraficasComponent } from './graficas/graficas.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'clima-laboral', component: ClimaLaboralComponent },
  { path: 'resultados', component: GraficasComponent},
  { path: 'clima-laboral-dimosa-silao.html', component: ClimaLaboralComponent },
  
  // Redirect Route
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
