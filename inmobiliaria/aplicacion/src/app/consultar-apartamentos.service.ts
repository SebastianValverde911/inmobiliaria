import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarApartamentosService {

  constructor(private http: HttpClient) { }

  getConsultarApartamentos() {
    console.log("Esta entrando al servicio");
    return this.http.get("http://localhost:9000/consultarApartamentos?tipo=Apartamento")
  }
}
