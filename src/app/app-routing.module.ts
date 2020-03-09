import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClimaLaboralComponent } from './clima-laboral/clima-laboral.component';
import { GraficasComponent } from './graficas/graficas.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'clima-laboral', component: ClimaLaboralComponent },
  { path: 'resultados', component: GraficasComponent},
  // Redirect Route
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
