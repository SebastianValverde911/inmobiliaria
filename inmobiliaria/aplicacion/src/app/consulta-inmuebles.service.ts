//Crear un servicio ng generate service consultaInmueble
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaInmueblesService {

  constructor(private http: HttpClient) { }

  getInmuebles(){

    //colocamos la funcion que nos permite conectarnos con el API 
    const headers = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    });
    
    this.http.get("http://localhost:9000/consultaInmuebles",{headers:headers}).subscribe(data =>{
      console.log(data);
    } )
  }

}
