import { Component, OnInit, Input,ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Juego } from 'src/app/clases/juego';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements AfterViewInit {
  //@Input() listadoPromesa: Promise<Juego>;
  @Input() listado: Juego[];

  dataSource: MatTableDataSource<Juego>;
  displayedColumns: string[] = ['Jugador', 'Juego', 'Resultado', 'Puntaje'];


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {
    //this.listadoPromesa.then(()=>{
      
      
    //});

   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.listado);
    console.log('componente listado resultados');
      //console.log(this.listado);
      //console.log(this.dataSource.data);
    
    
  }
  ngAfterViewInit() {
    //this.dataSource.filterPredicate = this.filterFunction;
    //this.filterControl.valueChanges.subscribe(searchValue => this.dataSource.filter = searchValue);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  ngOnChanges(){
    if(this.table!=undefined){
      console.log("Cambio data detectado compListadoRdo");
      this.dataSource = new MatTableDataSource(this.listado);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.table.renderRows();      
    }
  }

  applyFilter(event: Event) {
    console.log('Filtrando');
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    //console.log(this.dataSource.filteredData);
  }

  filterFunction(u: Juego, searchValue: string) : boolean{
    if (searchValue) {
      let v = searchValue.trim().toLowerCase()
      if (
        u.Juego.toLowerCase().includes(v) || 
        u.Jugador.toLowerCase().includes(v) //|| 
        //bla bla bla more tests
        //u.gano.toLowerCase().includes(v)  
      )
      { return true } 
      else { return false}
    } //end if searchValue
    else 
    {
      return true
    }
  }

}
