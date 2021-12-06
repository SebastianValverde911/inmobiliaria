import { Component, OnInit } from '@angular/core';
import { ConsultaUsuariosService } from '../consulta-usuarios.service';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  usuarios : any;
  constructor( private serviceUsuario:ConsultaUsuariosService) { }

  ngOnInit(): void {
    this.serviceUsuario.getUsers().subscribe(data =>{
      this.usuarios = data
      console.log(data);
    } );
  }

}
