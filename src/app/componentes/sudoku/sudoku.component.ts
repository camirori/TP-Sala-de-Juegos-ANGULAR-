import { Component, OnInit } from '@angular/core';
import { JuegoSudoku } from 'src/app/clases/juego-sudoku';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  juego:  JuegoSudoku;
  mensaje: string;
  tiles;

  constructor() { }

  ngOnInit(): void {
    this.nuevoJuego();
  }

  grilla(){
    this.tiles = [
    {numero: 0, cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)' },
    {numero: 1,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 2,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 3,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 4,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 5,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 6,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 7,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 8,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 9, cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 10,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 11,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 12,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 13,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(241, 241, 243)'},
    {numero: 14,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'},
    {numero: 15,cols: 1, rows: 1, input: '', habilitar: true, color: 'rgb(177, 188, 238, 0.5)'}
    ];
  }



  nuevoJuego(){
    console.log('Nuevo juego');
    this.grilla();
    this.juego= new JuegoSudoku(2);
    this.generarAyuda();
    this.mensaje=undefined;
  }

  generarAyuda(){
    let pista;
    for(let i=0;i<5;i++){
      do{
        pista= Math.floor(Math.random()*16);        
      }while(this.tiles[pista].input!='');
        this.tiles[pista].input=this.juego.casilleros[pista];
        this.tiles[pista].habilitar=false;
        this.tiles[pista].color='rgb(126, 140, 204, 0.6)';
    }
  }

  verificar(){
    for(let i=0;i<16;i++){
        this.juego.numerosIngresados[i]= this.tiles[i].input;
    }
    console.log('Verificando input:')
    console.log(this.juego.numerosIngresados);

    if(this.juego.numerosIngresados.includes('') || this.juego.numerosIngresados.includes(null))
      this.mensaje='Aún hay casilleros vacíos';
    else if(this.juego.verificar())
      this.mensaje='Ganaste!';
    else
      this.mensaje='Incorrecto';

  }

  mostrarRespuesta(){
    for(let i=0;i<16;i++){
      this.tiles[i].input= this.juego.casilleros[i];
  }
  }

}
