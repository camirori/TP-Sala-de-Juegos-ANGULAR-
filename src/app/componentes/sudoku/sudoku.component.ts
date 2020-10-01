import { Component, OnInit } from '@angular/core';
import { JuegoSudoku } from 'src/app/clases/juego-sudoku';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  juego:  JuegoSudoku;
  mensaje: string;
  tiles;
  tiempo;
  timer;
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
            this.width='50%';
            this.left='25%';
          }
        });
  }

  ngOnDestroy(){
    clearInterval(this.timer);
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

    clearInterval(this.timer);

    this.juego= new JuegoSudoku(2,this.email);
    this.grilla();
    this.generarAyuda();
    this.mensaje=undefined;
    console.log(this.juego);

    this.tiempo=50;
    this.timer= setInterval(()=>{
      this.tiempo--;
      if(this.tiempo==0){
        clearInterval(this.timer);
        this.mensaje="Se acabo el tiempo";
        this.juego.calcularPuntaje(0);
        this.puntaje.guardar(this.juego);
      }
    },1000);  
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
    else if(this.juego.numerosIngresados.some((val)=> val<1 || val>4)) 
      this.mensaje='Solo se aceptan numeros entre 1 y 4';
    else if(this.juego.verificar()){
      clearInterval(this.timer);
      this.mensaje='Ganaste!';      
      console.log(this.juego.Resultado);
      this.juego.calcularPuntaje(50-this.tiempo);
      this.puntaje.guardar(this.juego);
    }
    else
      this.mensaje='Incorrecto';

  }

  mostrarRespuesta(){
    for(let i=0;i<16;i++){
      this.tiles[i].input= this.juego.casilleros[i];
  }
  }

}
