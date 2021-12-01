import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsertarInmuebleService {

  constructor(private http: HttpClient) { }

  registrarInmueble(inmueble: Data){
    console.log("Servicio");
    this.http.put("http://localhost:9000/insertarInmueble",inmueble).subscribe( data => 
      {
        console.log(data);
      }
    );
  }
}
