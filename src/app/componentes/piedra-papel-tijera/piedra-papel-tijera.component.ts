import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from 'src/app/clases/juego-piedra-papel-tijera';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  juego: JuegoPiedraPapelTijera;
  mensaje: string;
  bloquearOpciones: boolean;
  resultado:number;
  email;

  constructor(private auth: AuthService,private puntaje: JuegosPuntajesService,private route: Router) { 
    if(localStorage.getItem('isLoggedIn')=='1')
      this.email=localStorage.getItem('email');
    else if(sessionStorage.getItem('isLoggedIn')=='1')
      this.email=sessionStorage.getItem('email');
    else
      this.route.navigate(['/Juegos/LoginRequired']);
  }

  ngOnInit(): void {
  }

  iniciarJuego(){
      this.juego=new JuegoPiedraPapelTijera(this.email);
      this.juego.nuevaRonda();
      this.bloquearOpciones=false;
      this.resultado=undefined;
      this.mensaje=undefined;
      console.log(this.juego);

  }
  verificar(eleccion: number){
    this.bloquearOpciones=true;
    this.juego.eleccionJugador=eleccion;
    //mensaje
    switch(this.juego.verificar()){
      case 0:
        this.mensaje='Perdiste la ronda';
        break;
      case 1:
        this.mensaje='Ronda empatada';
        break;
      case 2:
        this.mensaje='Ganaste la ronda';
        break;
    }
    
    setTimeout(()=>{
      this.limpiarMensaje(this.juego.ContadorRondas);

    },3000);

  }

  limpiarMensaje(rondas){
    this.mensaje=undefined;
    if(rondas>=3){
      this.resultado=this.juego.verificarResultado();
      if(this.resultado<0)
        this.mensaje='Perdiste el juego';
      else if(this.resultado==0){
          this.mensaje='Juego empatado';  
      }
      else if(this.resultado>0){
          this.mensaje='Ganaste el juego!';    
      }
      this.puntaje.guardar(this.juego);
    }else{
      this.juego.nuevaRonda(); 
      this.bloquearOpciones=false;     
    }
  }

}
