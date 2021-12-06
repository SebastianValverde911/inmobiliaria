import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCasasService {

  constructor(private http: HttpClient) { }

  getConsultarCasas() {
    console.log("Esta entrando al servicio");
    return this.http.get("http://localhost:9000/consultarCasas?tipo=Casa")
  }
}
 