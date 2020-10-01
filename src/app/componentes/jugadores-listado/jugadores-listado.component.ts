import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Juego } from 'src/app/clases/juego';
import {MatTableDataSource, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class JugadoresListadoComponent implements OnInit {

  @Input()  listadoRaw: Juego[];
  listado:any[];
  dataSource: MatTableDataSource<any>;
  columnsToDisplay : string[] = ['Ranking','Jugador', 'Puntaje'];
  expandedElement: any | null;

  juegos = [
    {value: 'Todos', viewValue: 'Todos'},
    {value: 'Adivina el número', viewValue: 'Adivina el número'},
    {value: 'Agilidad aritmetica', viewValue: 'Agilidad aritmetica'},
    {value: 'Anagrama', viewValue: 'Anagrama'},
    {value: 'Memotest', viewValue: 'Memotest'},
    {value: 'Piedra, papel o tijera', viewValue: 'Piedra, papel o tijera'},
    {value: 'Sudoku', viewValue: 'Sudoku'},
    {value: 'Ta-Te-Ti', viewValue: 'Ta-Te-Ti'}
  ];


  @ViewChild(MatTable) table: MatTable<any>;
  
  
    constructor() {
      
      
    }
    


  ngOnInit() {
    this.armarListado(this.listadoRaw, 'Todos');
    this.dataSource = new MatTableDataSource(this.listado);
  }

  ngOnChanges(){
    if(this.table!=undefined){
      console.log("Cambio data detectado compListadoJugadores");
      this.armarListado(this.listadoRaw, 'Todos');
      this.dataSource = new MatTableDataSource(this.listado);

      this.table.renderRows();      
    }
    
  }

  filtrar(seleccion: string){
    this.armarListado(this.listadoRaw, seleccion);
    this.dataSource = new MatTableDataSource(this.listado);
    this.table.renderRows();  
  }


  armarListado(data: Juego[], nombreJuego: string){
    this.listado=[];
    for(let juego of data){
      if(nombreJuego=='Todos' || juego.Juego==nombreJuego){
        let index=this.listado.findIndex((item)=>item.Jugador==juego.Jugador);
        if(index!=-1){
          this.listado[index].Puntaje+=juego.Puntaje;
          this.listado[index].description.push({Juego: juego.Juego, Resultado: juego.Resultado?'Gano':'Perdio', Puntaje: juego.Puntaje});
        }
        else{
          this.listado.push({
            Ranking: 0,
            Jugador: juego.Jugador,
            Puntaje: juego.Puntaje,
            description: [{Juego: juego.Juego, Resultado: juego.Resultado?'Gano':'Perdio', Puntaje: juego.Puntaje}]
          });        
        }        
      }

    }

    this.listado=this.listado.sort((a,b)=>b.Puntaje-a.Puntaje);
    let i=1;
    for(let item of this.listado){
      item.Ranking=i;
      i++;
    }
    console.log(this.listado);

  }







}
