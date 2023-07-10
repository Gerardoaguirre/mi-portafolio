// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent,  } from './Portafolio.component';
import { Presentancioncomponent } from './pagina/Presentancion.component';




const routes: Routes = [
  {
    path: '',
    component: PortafolioComponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
      { path: 'Presentacion', component : Presentancioncomponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }