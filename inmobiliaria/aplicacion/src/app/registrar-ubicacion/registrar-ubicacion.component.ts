import { Component, OnInit } from '@angular/core';
import { InsertarUbicacionService } from '../insertar-ubicacion.service';

@Component({
  selector: 'app-registrar-ubicacion',
  templateUrl: './registrar-ubicacion.component.html',
  styleUrls: ['./registrar-ubicacion.component.css']
})
export class RegistrarUbicacionComponent implements OnInit {

  constructor(private servicio:InsertarUbicacionService) { }

  ngOnInit(): void {
  }

  registrarUbicacion(){
    console.log("Metodo registrar ubicacion componente");
    let zona = (document.getElementById("zona") as HTMLInputElement).value;
    let barrio = (document.getElementById("barrio") as HTMLInputElement).value;
  
    
    let inmueble = {
      zona: zona,
      barrio: barrio
    }
    this.servicio.registrarUbicacion(inmueble);
  }

} 
