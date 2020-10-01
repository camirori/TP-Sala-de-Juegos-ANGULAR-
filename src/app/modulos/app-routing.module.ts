import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
// import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
// import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
// import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
// import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
// import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from '../componentes/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from '../componentes/memotest/memotest.component';
import { SudokuComponent } from '../componentes/sudoku/sudoku.component';
import { NoAutorizadoComponent } from '../componentes/no-autorizado/no-autorizado.component';


const routes: Routes = [
  
  {path: '' , component: PrincipalComponent},
  {path: 'Login' , component: LoginComponent},
  // {path: 'Mapa' , component: MapaDeGoogleComponent},
  {path: 'QuienSoy' , component: QuienSoyComponent},
  {path: 'Registro' , component: RegistroComponent},
  {path: 'Principal' , component: PrincipalComponent},
  {path: 'Listado/Resultados' , component: ListadoComponent},
  {path: 'Listado/Jugadores' , component: ListadoComponent},
  // {path: 'Paises' , component: ListadoDePaisesComponent},

  {path: 'Juegos' ,
    component: JuegosComponent ,
    children:[
      {path: '' , component: MenuCardComponent},
      {path: 'Anagrama' , component: AnagramaComponent},
      {path: 'Piedra-papel-tijera' , component: PiedraPapelTijeraComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'TaTeTi' , component: TaTeTiComponent},
      {path: 'Memotest' , component: MemotestComponent},
      {path: 'Sudoku' , component: SudokuComponent},
      {path: 'LoginRequired' , component: NoAutorizadoComponent},
    ]
  },
  {path: '**' , component: ErrorComponent},
  {path: 'error' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
