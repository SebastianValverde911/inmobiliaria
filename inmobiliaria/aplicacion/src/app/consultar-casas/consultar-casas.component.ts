import { Component, OnInit } from '@angular/core';
import { ConsultarCasasService } from '../consultar-casas.service';

@Component({
  selector: 'app-consultar-casas',
  templateUrl: './consultar-casas.component.html',
  styleUrls: ['./consultar-casas.component.css']
})
export class ConsultarCasasComponent implements OnInit {
  casas:any;
  constructor(private servicio: ConsultarCasasService) { }

  ngOnInit(): void {
    this.servicio.getConsultarCasas().subscribe(data => {
      this.casas=data;
      console.log(data);
    });
  }   

}
