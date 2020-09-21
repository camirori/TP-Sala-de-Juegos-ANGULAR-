import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription,timer} from "rxjs";
import { JuegoAgilidad } from '../../clases/juego-agilidad'

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;

  ngOnInit() {
  }

  constructor() {
    
  }

  NuevoJuego() {
    this.Tiempo=10; 
    console.info("Inicio agilidad");  
    this.nuevoJuego = new JuegoAgilidad();
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      
    this.Tiempo--;
    console.log("llego", this.Tiempo);
    if(this.Tiempo==0 ) {
      clearInterval(this.repetidor);
      this.verificar();
      this.ocultarVerificar=true;
      this.Tiempo=5;
    }
    }, 900);

  }
  verificar()  {
    this.nuevoJuego.verificar();
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);
  }  

}
