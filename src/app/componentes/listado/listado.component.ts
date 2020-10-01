import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/clases/juego';
//import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegosPuntajesService } from '../../servicios/juegos-puntajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //public listadoParaCompartir: Array<any>;
   //miServicioJuego:JuegoServiceService


   tab;
   public listadoPuntajes: Juego[];
   //public listadoPuntajesPromesa: Promise<Juego>;
   @Input() public nuevoPuntaje: Juego;

  constructor(private route: Router,
              private puntajeService: JuegosPuntajesService) {

    //this.listadoPuntajesPromesa= new Promise((resolve,reject)=>{
      this.puntajeService.getPuntajes().then((listado)=>{
        this.listadoPuntajes=listado;
        console.log('componente listado1');
        console.log(this.listadoPuntajes);
        
      });
      //resolve(this.listadoPuntajes);
    //});
    
    if(this.route.url=='/Listado/Jugadores') 
      this.tab=1;
    else 
      this.tab=0;
    
  }
  
  ngOnInit() {
    

 
  }

  ngOnChanges(){
    console.log("Cambio data detectado compListado");
    if(this.listadoPuntajes!=undefined && this.listadoPuntajes!=null){
      let nuevaRef =[this.nuevoPuntaje];                 //cambio la referencia para que el onChanges detecte el cambio
      for(let puntaje of this.listadoPuntajes){
        nuevaRef.push(puntaje);
      }
      this.listadoPuntajes=nuevaRef;      
    }


  }

  /* llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  } */

  getListado(){
    //this.puntajeService.getPuntajes().subscribe()


  }









}
