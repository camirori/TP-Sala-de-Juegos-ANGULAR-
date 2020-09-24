import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from 'src/app/clases/juego-piedra-papel-tijera';

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

  constructor() { }

  ngOnInit(): void {
  }

  iniciarJuego(){
    this.juego=new JuegoPiedraPapelTijera();
    this.juego.nuevaRonda();
    this.bloquearOpciones=false;
    this.resultado=undefined;
    this.mensaje=undefined;

  }
  verificar(eleccion: number){
    this.bloquearOpciones=true;
    this.juego.eleccionJugador=eleccion;
    //mensaje
    switch(this.juego.verificar()){
      case 0:
        this.mensaje='Perdiste';
        break;
      case 1:
        this.mensaje='Empate';
        break;
      case 2:
        this.mensaje='Ganaste';
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
      else if(this.resultado==0)
          this.mensaje='Juego empatado';
      else if(this.resultado>0)
          this.mensaje='Ganaste el juego!';
    }else{
      this.juego.nuevaRonda(); 
      this.bloquearOpciones=false;     
    }
  }

}
