import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modulos/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';

import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './componentes/login/login.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SexoPipe } from './pipes/sexo.pipe';

import { JugadoresService } from './servicios/jugadores.service'; 
import { ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { JuegoServiceService } from './servicios/juego-service.service';
//import { MiHttpService } from './servicios/mi-http.service'; 
import { MiHttpService } from './servicios/mi-http/mi-http.service';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './componentes/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SudokuComponent } from './componentes/sudoku/sudoku.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PrincipalComponent,
    CabeceraComponent,
    LoginComponent,
    JuegosComponent,
    MenuCardComponent,
    AdivinaElNumeroComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    AgilidadAritmeticaComponent,
    AnagramaComponent,
    InputJugadoresComponent,
    JugadoresListadoComponent,
    ListadoComponent,
    ListadoDeResultadosComponent,
    MenuComponent,
    QuienSoyComponent,
    RegistroComponent,
    SexoPipe,
    PiedraPapelTijeraComponent,
    TaTeTiComponent,
    MemotestComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [JuegoServiceService, MiHttpService,ArchivosJugadoresService,JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
