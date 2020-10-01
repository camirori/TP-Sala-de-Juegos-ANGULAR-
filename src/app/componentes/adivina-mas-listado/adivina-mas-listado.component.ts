import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public nuevoJuego: Juego;
  constructor() { 
    
  }


  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego){
    this.nuevoJuego=juego;
    console.info("Evento recibido");
  }
}
