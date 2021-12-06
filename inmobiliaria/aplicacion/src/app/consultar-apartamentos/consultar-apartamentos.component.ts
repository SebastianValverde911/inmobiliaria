import { Component, OnInit } from '@angular/core';
import { ConsultarApartamentosService } from '../consultar-apartamentos.service';

@Component({
  selector: 'app-consultar-apartamentos',
  templateUrl: './consultar-apartamentos.component.html',
  styleUrls: ['./consultar-apartamentos.component.css']
})
export class ConsultarApartamentosComponent implements OnInit {
  apartamentos: any;
  constructor(private service:ConsultarApartamentosService) { }

  ngOnInit(): void {
    this.service.getConsultarApartamentos().subscribe(data => {
      this.apartamentos = data;
      console.log(data);
    })
  }
 
}
