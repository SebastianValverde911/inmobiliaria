import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InsertarUsuarioService {

  constructor(private http: HttpClient) { }

  registrarUsuario(inmueble: Data){
    console.log("Servicio registrar usuario");
    this.http.put("http://localhost:9000/insertarUsuario",inmueble).subscribe( data => 
      {
        console.log(data);
      }
    );
  }
}
