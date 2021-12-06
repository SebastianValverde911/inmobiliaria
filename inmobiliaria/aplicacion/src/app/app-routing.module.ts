import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrarUsuarioComponent } from 'src/app/registrar-usuario/registrar-usuario.component';
import { RegistrarInmuebleComponent } from 'src/app/registrar-inmueble/registrar-inmueble.component';
import { ConsultaInmuebleComponent } from 'src/app/consulta-inmueble/consulta-inmueble.component';
import { ConsultaUsuarioComponent } from 'src/app/consulta-usuario/consulta-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarUbicacionComponent } from './registrar-ubicacion/registrar-ubicacion.component';
import { ConsultarCasasComponent } from './consultar-casas/consultar-casas.component';
import { ConsultarApartamentosComponent } from './consultar-apartamentos/consultar-apartamentos.component';




const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registrar-usuario',
    component: RegistrarUsuarioComponent
  },
  {
    path:'registrar-inmueble',
    component: RegistrarInmuebleComponent
  },
  {
    path:'registrar-ubicacion',
    component: RegistrarUbicacionComponent
  },
  {
    path:'consultar-inmuebles',
    component: ConsultaInmuebleComponent
  },
  {
    path:'consultar-usuarios',
    component: ConsultaUsuarioComponent
  },
  {
    path:'consultar-casas',
    component: ConsultarCasasComponent
  },
  {
    path:'consultar-apartamentos',
    component: ConsultarApartamentosComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
