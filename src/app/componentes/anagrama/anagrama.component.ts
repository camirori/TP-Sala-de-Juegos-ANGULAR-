import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from 'src/app/clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  palabraIngresada;
  juego: JuegoAnagrama;
  mensaje: string;
  gano: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  nuevoJuego(){
    this.palabraIngresada='';
    this.mensaje=undefined;
    this.juego= new JuegoAnagrama();
    this.gano=false;
  }

  verificar(){
    if(this.juego.palabraElegida==this.palabraIngresada.toUpperCase()){
      this.mensaje="No vale la misma palabra!";
    }else{
      this.juego.palabraIngresada=this.palabraIngresada;
      if(this.juego.verificar()){
        this.mensaje="Correcto!";
        this.gano=true;
      }else{
        this.mensaje="Incorrecto, vuelve a intentar";
      }      
    }


  }

}
