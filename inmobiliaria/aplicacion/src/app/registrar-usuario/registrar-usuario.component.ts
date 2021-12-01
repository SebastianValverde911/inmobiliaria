import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  //backend
  
  constructor() { }

  ngOnInit(): void {
    
  }

  Saludo() {
    console.log("Hola");
  }

  

}
