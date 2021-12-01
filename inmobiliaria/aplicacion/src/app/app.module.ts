import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Component */
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ConsultaInmuebleComponent } from './consulta-inmueble/consulta-inmueble.component';
import { RegistrarInmuebleComponent } from './registrar-inmueble/registrar-inmueble.component';
import { ConsultaUsuarioComponent } from './consulta-usuario/consulta-usuario.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/* Servicios */
import { ConsultaInmueblesService } from './consulta-inmuebles.service';
import { ConsultaUsuariosService } from './consulta-usuarios.service';
import { InsertarInmuebleService } from './insertar-inmueble.service';


@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    RegistrarUsuarioComponent,
    ConsultaInmuebleComponent,
    RegistrarInmuebleComponent,
    ConsultaUsuarioComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ConsultaInmueblesService,
    ConsultaUsuariosService,
    InsertarInmuebleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
