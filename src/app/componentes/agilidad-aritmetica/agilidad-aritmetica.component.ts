import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Subscription,timer} from "rxjs";
import { JuegoAgilidad } from '../../clases/juego-agilidad'
import { Juego } from '../../clases/juego';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuegoEvent :EventEmitter<Juego>= new EventEmitter<Juego>();

  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  mensajePrincipal: string;
  mensajeSecundario:string;
  email;

  ngOnInit() {
  }

  ngOnDestroy(){
    clearInterval(this.repetidor);
  }

  constructor(private auth: AuthService,private puntaje: JuegosPuntajesService,private route: Router) {
    if(localStorage.getItem('isLoggedIn')=='1')
      this.email=localStorage.getItem('email');
    else if(sessionStorage.getItem('isLoggedIn')=='1')
      this.email=sessionStorage.getItem('email');
    else
      this.route.navigate(['/Juegos/LoginRequired']);
  }

  NuevoJuego() {
    console.info("Inicio agilidad");  
    this.nuevoJuego = new JuegoAgilidad(this.email);    
    console.log(this.nuevoJuego)  ;

    this.mensajePrincipal='';
    this.mensajeSecundario='';
    this.Tiempo=10; 

    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        //this.verificar();
        this.ocultarVerificar=true;
        this.mensajePrincipal='Se acabo el tiempo!!';
        this.mensajeSecundario='Respuesta: '+this.nuevoJuego.respuesta;
        this.nuevoJuego.calcularPuntaje(0);
        this.puntaje.guardar(this.nuevoJuego);
        this.enviarJuegoEvent.emit(this.nuevoJuego);
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
      this.nuevoJuego.calcularPuntaje(10-this.Tiempo);
      console.log(this.nuevoJuego)  ;
      this.puntaje.guardar(this.nuevoJuego);
      this.enviarJuegoEvent.emit(this.nuevoJuego);

    }else{
      this.ocultarVerificar=false;
      this.mensajePrincipal='Incorrecto!!';
      this.mensajeSecundario='Aún tienes tiempo';    
    }

  }  

}
