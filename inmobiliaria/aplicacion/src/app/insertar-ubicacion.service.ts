import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsertarUbicacionService {

  constructor(private http: HttpClient) { }

  registrarUbicacion(inmueble: Data){
    console.log("Servicio ubicacion");
    this.http.put("http://localhost:9000/insertarUbicacion",inmueble).subscribe( data => 
      {
        console.log(data);
      }
    );
  }
}
 