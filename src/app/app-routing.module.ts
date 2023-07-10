import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },{
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },{
    path: 'Portafolio',
    loadChildren: ()=>import('./Portafolio/Portafolio.module').then(m=>m.PortafolioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
