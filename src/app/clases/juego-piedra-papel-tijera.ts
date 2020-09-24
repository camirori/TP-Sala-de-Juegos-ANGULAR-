import { Juego } from '../clases/juego';

export class JuegoPiedraPapelTijera extends Juego{
    eleccionMaquina;
    ContadorDeEmpates=0;
    ContadorDeGanadas=0;
    ContadorDePerdidas=0;
    eleccionJugador;
    ContadorRondas=0;
    resultado;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
      super("Piedra, papel o tijera",gano,jugador);  
      this.nuevoJuego();
    }

    private nuevoJuego(){
      this.ContadorRondas=0;
      this.ContadorDeEmpates=0;
      this.ContadorDeGanadas=0;
      this.ContadorDePerdidas=0;

      
    }

    public nuevaRonda(){
      this.eleccionMaquina=Math.floor(Math.random()*3)+1;
      console.log(this.eleccionMaquina);
      this.eleccionJugador=0;
         /* 1=piedra
          2=papel
          3=tijera*/
    }

    public verificar():number{
      this.ContadorRondas++;
      if(this.eleccionJugador==this.eleccionMaquina){
        this.ContadorDeEmpates++;
        return 1;
      }
      switch(this.eleccionMaquina){
        case 1:                         //piedra
          switch(this.eleccionJugador){
            case 2:
              this.ContadorDeGanadas++;
              return 2
            case 3:
              this.ContadorDePerdidas++;
              return 0;
          }
        case 2:
          switch(this.eleccionJugador){
            case 1:
              this.ContadorDePerdidas++;
              return 0
            case 3:
              this.ContadorDeGanadas++;
              return 2;
          }
        case 3:
          switch(this.eleccionJugador){
            case 1:
              this.ContadorDeGanadas++;
              return 2;
            case 2:
              this.ContadorDePerdidas++;
              return 0;
          }
      }
      //0 perdio
      //1 empate
      //2 gano

    }

    public verificarResultado(){
      this.resultado=this.ContadorDeGanadas-this.ContadorDePerdidas;
      return this.resultado;
      //<0 perdio
      //==0 empate
      //>0 gano

    }

    public calcularPuntaje(){


    }




}
