import { Component, OnInit, OnDestroy } from '@angular/core';
import { JuegoAnagrama } from 'src/app/clases/juego-anagrama';
import { AuthService } from '../../servicios/auth.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  palabraIngresada;
  juego: JuegoAnagrama;
  mensaje: string;
  tiempo;
  timer;
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

  ngOnDestroy(){
    clearInterval(this.timer);
  }

  nuevoJuego(){
    clearInterval(this.timer);

    this.juego= new JuegoAnagrama(this.email);
    console.log(this.juego);
    this.palabraIngresada='';
    this.mensaje=undefined;
    this.tiempo=20;
    this.timer= setInterval(()=>{
      this.tiempo--;
      if(this.tiempo==0){
        clearInterval(this.timer);
        this.mensaje="Se acabo el tiempo!";
        this.juego.calcularPuntaje(0);
        this.puntaje.guardar(this.juego);
      }
    },1000);      
   
  }

  verificar(){
    if(this.juego.palabraElegida==this.palabraIngresada.toUpperCase()){
      this.mensaje="No vale la misma palabra!";
    }else{
      this.juego.palabraIngresada=this.palabraIngresada;
      if(this.juego.verificar()){
        clearInterval(this.timer);
        this.mensaje="Correcto!";
        this.juego.calcularPuntaje(20-this.tiempo);
        this.puntaje.guardar(this.juego);
      }else{
        this.mensaje="Incorrecto, vuelve a intentar";
      }      
    }


  }

}
