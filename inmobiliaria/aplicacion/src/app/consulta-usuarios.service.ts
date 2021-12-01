import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsuariosService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const headers = new HttpHeaders({
      'Content-Type':'application/X-WWW-form-urlencoded'
    });

    this.http.get("http://localhost:9000/consultaUsuarios",{headers:headers}).subscribe(data =>{
      console.log(data);
    } )
    
  }
}
