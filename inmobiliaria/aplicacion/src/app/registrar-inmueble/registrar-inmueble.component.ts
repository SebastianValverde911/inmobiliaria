import { Component, OnInit } from '@angular/core';
import { InsertarInmuebleService } from '../insertar-inmueble.service';

@Component({
  selector: 'app-registrar-inmueble',
  templateUrl: './registrar-inmueble.component.html',
  styleUrls: ['./registrar-inmueble.component.css']
})
export class RegistrarInmuebleComponent implements OnInit {
  
  constructor(private servicio:InsertarInmuebleService) { 
    
  }

  ngOnInit(): void {
  }

  registrarInmueble(){
    console.log("Metodo registrar componente");
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let tipo = (document.getElementById("tipo") as HTMLInputElement).value;
    let imagen = (document.getElementById("imagen") as HTMLInputElement).value;
    let ubicacion = (document.getElementById("ubicacion") as HTMLInputElement).value;
    
    let inmueble = {
      nombre: nombre,
      tipo: tipo,
      imagen: imagen,
      ubicacion: ubicacion
    }
    this.servicio.registrarInmueble(inmueble);
  }

  

}
