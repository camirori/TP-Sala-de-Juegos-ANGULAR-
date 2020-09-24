import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from 'src/app/clases/juego-tateti';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

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

  constructor() { }

  ngOnInit(): void {
    this.nuevoJuego();

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
    this.juego= new JuegoTateti();
    this.mensaje=undefined;
    this.habilitarOpciones=true;
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
        return false;
      case 1:
        this.mensaje='Ganaste!';
        this.colorearBordes(this.linea);
        return false;
      case 2:
        this.mensaje='Perdiste';
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
