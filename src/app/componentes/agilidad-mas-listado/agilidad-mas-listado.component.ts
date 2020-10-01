import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public nuevoJuego: Juego;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
  tomarJuegoTerminado(juego: Juego){
    this.nuevoJuego=juego;
    console.info("Evento recibido");


    /* let nuevaRef= [juego];                      //cambio la referencia para que el onChanges detecte el cambio
    for(let item of this.listadoParaCompartir){
      nuevaRef.push(item);
    }
    this.listadoParaCompartir=nuevaRef;
    console.info("Evento recibido",this.listadoParaCompartir); */
  }

}
