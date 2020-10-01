import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { Juego } from '../../clases/juego';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output() enviarJuegoEvent: EventEmitter<Juego>= new EventEmitter<Juego>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  email;
 
  constructor(private auth: AuthService,private puntaje: JuegosPuntajesService
            ,private route: Router) { 
    this.ocultarVerificar=false;
    if(localStorage.getItem('isLoggedIn')=='1')
      this.email=localStorage.getItem('email');
    else if(sessionStorage.getItem('isLoggedIn')=='1')
      this.email=sessionStorage.getItem('email');
    else
      this.route.navigate(['/Juegos/LoginRequired']);
  }


  generarnumero() {
    this.nuevoJuego = new JuegoAdivina(this.email);
    this.contador=0;   
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    console.log(this.nuevoJuego);
  }

  verificar()
  {
    this.contador++;
    if (this.nuevoJuego.verificar()){
      
      
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.calcularPuntaje(this.contador);
      this.puntaje.guardar(this.nuevoJuego);
      this.enviarJuegoEvent.emit(this.nuevoJuego);

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     
    }
    console.info("numero Secreto:",this.nuevoJuego.Resultado);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");

     }, 3000);
    console.info("objeto",x);
  
   }  

  ngOnInit(): void {
  }

}
