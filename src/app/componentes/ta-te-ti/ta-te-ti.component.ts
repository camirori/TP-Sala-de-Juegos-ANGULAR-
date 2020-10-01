import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from 'src/app/clases/juego-tateti';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.css']
})
export class TaTeTiComponent implements OnInit {
  juego: JuegoTateti;
  mensaje: string;
  habilitarOpciones: boolean;
  linea;
  tiles;
  email;

  width;
  left;

  constructor(private auth: AuthService,private puntaje: JuegosPuntajesService,
      public breakpointObserver: BreakpointObserver,private route: Router) { 
      if(localStorage.getItem('isLoggedIn')=='1')
        this.email=localStorage.getItem('email');
      else if(sessionStorage.getItem('isLoggedIn')=='1')
        this.email=sessionStorage.getItem('email');
      else
        this.route.navigate(['/Juegos/LoginRequired']);
  }

  ngOnInit(): void {
    this.nuevoJuego();

    this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.width='100%'
            this.left='0';
          }
          else{
            this.width='60%';
            this.left='20%';
          }
        });

  }

  grilla(){
    this.tiles = [
    {numero: 0, cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none' },
    {numero: 1,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 2,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 3,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 4,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 5,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 6,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 7,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'},
    {numero: 8,cols: 1, rows: 1, color: 'white', img:"url('')", disponible: true, borde: 'none'}
  ];
  }



  nuevoJuego(){
    console.log('Nuevo juego');
    this.grilla();
    this.juego= new JuegoTateti(this.email);
    this.mensaje=undefined;
    this.habilitarOpciones=true;
    console.log(this.juego);
  }

  movimientoJugador(casillero: number){
    console.log('Movimiento jugador');
    this.habilitarOpciones=false;

    if(this.juego.jugadaJugador(casillero)){
      this.tiles[casillero].disponible=false;
      this.tiles[casillero].img="url('/assets/imagenes/tateti/X.PNG')";
    }
    else  
      console.log('Error');
    

    //completar el casillero
    if(this.verificar())
      setTimeout(//this.movimientoMaquina
        ()=>{
          console.log('Movimiento maquina');
          let casillero=this.juego.jugadaMaquina();
          this.tiles[casillero].disponible=false;
          this.tiles[casillero].img="url('/assets/imagenes/tateti/O.PNG')";
          if(this.verificar())
            setTimeout((()=>this.habilitarOpciones=true),1000);
        }
        ,2000);
    
  }

  movimientoMaquina(){
    console.log('Movimiento maquina');
    let casillero=this.juego.jugadaMaquina();
    this.tiles[casillero].disponible=false;
    this.tiles[casillero].img="url('/assets/imagenes/tateti/O.PNG')";
    if(this.verificar())
      setTimeout((()=>this.habilitarOpciones=true),1000);

  }

  verificar(){
    console.log('Verificando');
    this.linea= this.juego.verificar();

    //mensaje
    if(this.juego.resultado==undefined)
      return true;
    switch(this.juego.resultado){
      case 0:
        this.mensaje='Empate';
        this.juego.calcularPuntaje(0);
        this.puntaje.guardar(this.juego);
        return false;
      case 1:
        this.mensaje='Ganaste!';
        this.colorearBordes(this.linea);
        this.juego.calcularPuntaje(1);
        this.puntaje.guardar(this.juego);
        return false;
      case 2:
        this.mensaje='Perdiste';
        this.juego.calcularPuntaje(2);
        this.puntaje.guardar(this.juego);
        this.colorearBordes(this.linea);
        return false;
      default:
        return true;  //seguir jugando
    }
  }

  colorearBordes(celdas){
    for(let i of celdas){
      this.tiles[i].borde='2px rgb(125, 146, 240) solid';
    }

  }

}
