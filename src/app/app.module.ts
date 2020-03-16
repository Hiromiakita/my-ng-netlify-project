import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactInfoNavBarComponent } from './landing-page/contact-info-nav-bar/contact-info-nav-bar.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { BannerComponent } from './landing-page/banner/banner.component';
import { ClimaLaboralComponent } from './clima-laboral/clima-laboral.component';
import { FooterComponent } from './footer/footer.component';
import { InfoFormComponent } from './clima-laboral/info-form/info-form.component';
import { InstruccionesComponent } from './clima-laboral/instrucciones/instrucciones.component';
import { ReactivosOpcMultComponent } from './clima-laboral/reactivos-opc-mult/reactivos-opc-mult.component';
import { ReactivosPregAbiertasComponent } from './clima-laboral/reactivos-preg-abiertas/reactivos-preg-abiertas.component';
import { ServiciosComponent } from './landing-page/servicios/servicios.component';
import { AdnComponent } from './landing-page/adn/adn.component';
import { FirmaComponent } from './landing-page/firma/firma.component';
import { BannerClimaLaboralComponent } from './clima-laboral/banner-clima-laboral/banner-clima-laboral.component';
import { HeaderClimaLaboralComponent } from './clima-laboral/header-clima-laboral/header-clima-laboral.component';
import { GraficasComponent } from './graficas/graficas.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { TablaComponent } from './tabla/tabla.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactInfoNavBarComponent,
    HeaderComponent,
    BannerComponent,
    ClimaLaboralComponent,
    FooterComponent,
    InfoFormComponent,
    InstruccionesComponent,
    ReactivosOpcMultComponent,
    ReactivosPregAbiertasComponent,
    ServiciosComponent,
    AdnComponent,
    FirmaComponent,
    BannerClimaLaboralComponent,
    HeaderClimaLaboralComponent,
    GraficasComponent,
    TablaComponent,
    ResultadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
