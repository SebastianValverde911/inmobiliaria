import { Component, OnInit } from '@angular/core';
import { InsertarUsuarioService } from '../insertar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  //backend
  
  constructor(private servicio:InsertarUsuarioService) { }

  ngOnInit(): void {
    
  }

  registrarUsuario(){
    console.log("Metodo registrar usuario componente");

    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let apellido = (document.getElementById("apellido") as HTMLInputElement).value;
    let cedula = (document.getElementById("cedula") as HTMLInputElement).value;
    let telefono = (document.getElementById("telefono") as HTMLInputElement).value;
    let correo = (document.getElementById("correo") as HTMLInputElement).value;
    let password = (document.getElementById("password") as HTMLInputElement).value;
    
    
    let usuario = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      telefono: telefono,
      correo: correo,
      password: password
    }
    this.servicio.registrarUsuario(usuario);
  }

  

}
