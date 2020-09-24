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
  mensajePrincipal: string;
  mensajeSecundario:string;

  ngOnInit() {
  }

  constructor() {
    
  }

  NuevoJuego() {
    this.mensajePrincipal='';
    this.mensajeSecundario='';
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
      this.mensajePrincipal='Se acabo el tiempo!!';
      this.mensajeSecundario='Respuesta: '+this.nuevoJuego.respuesta;
      //this.Tiempo=5;
    }
    }, 900);

  }
  verificar()  {
    if(this.nuevoJuego.verificar()){
      clearInterval(this.repetidor);  
      this.ocultarVerificar=true;     
      this.mensajePrincipal='Ganaste!!';
      this.mensajeSecundario='Tiempo restante:'+this.Tiempo;

    }else{
      this.ocultarVerificar=false;
      this.mensajePrincipal='Incorrecto!!';
      this.mensajeSecundario='Aún tienes tiempo';    
    }

  }  

}
