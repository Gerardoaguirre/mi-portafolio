import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortafolioComponent } from './Portafolio.component';
import { Presentancioncomponent } from './pagina/Presentancion.component';
import { PortafolioRoutingModule } from './Portafolio-routing.module';
import { SobreMicomponent } from './pagina/SobreMi.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    PortafolioComponent,
    Presentancioncomponent,
    SobreMicomponent
  ],
  imports: [
    // BrowserModule,
    RouterModule,
    PortafolioRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []     
//   bootstrap: [FooterComponent]
})
export class PortafolioModule { }