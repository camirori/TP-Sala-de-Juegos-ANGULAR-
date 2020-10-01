import { Component, OnInit } from '@angular/core';
import { JuegoMemotest } from 'src/app/clases/juego-memotest';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {
  juego: JuegoMemotest;
  mensaje: string;
  habilitarOpciones: boolean;
  tiles;
  tarjetasElegidas: number[];
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
            this.width='100%';
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
    {numero: 0, cols: 1, rows: 1, img:"url('')", mostrar: false },
    {numero: 1,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 2,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 3,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 4,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 5,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 6,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 7,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 8,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 9, cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 10,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 11,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 12,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 13,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 14,cols: 1, rows: 1, img:"url('')", mostrar: false},
    {numero: 15,cols: 1, rows: 1, img:"url('')", mostrar: false}
    ];
  }

  nuevoJuego(){

    console.log('Nuevo juego');
    this.grilla();
    this.juego= new JuegoMemotest(this.email);
    this.asignarImagenes();
    this.mensaje=undefined;
    this.habilitarOpciones=true;
    this.tarjetasElegidas= [];
    console.log(this.juego);
  }

  asignarImagenes(){
    console.log('Cargando imagenes');
    for(let i in this.juego.casilleros){
      switch(this.juego.casilleros[i]){
        case 0:
          this.tiles[i].img="url('/assets/imagenes/memotest/A.PNG')"
          break;
        case 1:
          this.tiles[i].img="url('/assets/imagenes/memotest/B.PNG')"
          break;
        case 2:
          this.tiles[i].img="url('/assets/imagenes/memotest/C.PNG')"
          break;
        case 3:
          this.tiles[i].img="url('/assets/imagenes/memotest/D.PNG')"
          break;
        case 4:
          this.tiles[i].img="url('/assets/imagenes/memotest/E.PNG')"
          break;
        case 5:
          this.tiles[i].img="url('/assets/imagenes/memotest/F.PNG')"
          break;
        case 6:
          this.tiles[i].img="url('/assets/imagenes/memotest/G.PNG')"
          break;
        case 7:
          this.tiles[i].img="url('/assets/imagenes/memotest/H.PNG')"
          break;
      }      
    }
  }

  elegir(casillero){
    console.log('Tarjeta elegida');
    this.tarjetasElegidas.push(casillero);
    this.tiles[casillero].mostrar=true;

    if(this.tarjetasElegidas.length==2){
      this.habilitarOpciones=false;
      this.verificarPar();
    }

    
  }

  verificarPar(){
    if(this.juego.verificarJugada(this.tarjetasElegidas[0],this.tarjetasElegidas[1])){
      console.log('Hay coincidencia');
      if(this.verificar())
        this.habilitarOpciones=true; 
      this.tarjetasElegidas=[];
    }else{
      console.log('No hay coincidencia');
      setTimeout(()=>{
        this.tiles[this.tarjetasElegidas[0]].mostrar=false;
        this.tiles[this.tarjetasElegidas[1]].mostrar=false;
        this.tarjetasElegidas=[];
        this.habilitarOpciones=true;        
      },2000);

    }



  }

  verificar(){
    console.log('Verificando');
    //mensaje
    if(this.juego.verificar()){
      this.mensaje='Ganaste!';
      this.puntaje.guardar(this.juego);
      return false;      
    }
    return true;      //seguir jugando
  }



}
