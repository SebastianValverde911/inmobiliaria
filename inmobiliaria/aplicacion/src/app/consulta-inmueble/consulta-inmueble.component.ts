import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-consulta-inmueble',
  templateUrl: './consulta-inmueble.component.html',
  styleUrls: ['./consulta-inmueble.component.css']
})
export class ConsultaInmuebleComponent implements OnInit {
  inmueble:any;
  constructor(
    private serviceInmueble:ConsultaInmueblesService    
    ) { }

  ngOnInit(): void {
    this.serviceInmueble.getInmuebles().subscribe(data =>{
      this.inmueble = data;
      console.log(data);
    } );
  }

}
