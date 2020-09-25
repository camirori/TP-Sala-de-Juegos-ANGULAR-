import { Juego } from '../clases/juego';
export class JuegoAnagrama extends  Juego {

    palabraElegida:string;
    anagramaElegido: string[];
    palabraIngresada: string;
    resultado;
    anagramas=[
      ['REFINAMIENTO','ENFRIAMIENTO'],
      ['ENERGETICAMENTE','GENERICAMENTE','ENERGÉTICAMENTE','GENÉRICAMENTE'],
      ['DELIRA','LIDERA'],
      ['AGRANDA','GRANADA','AGRADAN'],
      ['FRASE','FRESA'],
      ['ACUERDO','ECUADOR','RECAUDO'],
      ['SACO','COSA','CASO','ASCO'],
      ['AMOR','MORA','ROMA'],
      ['RESTO','RETOS','TERSO','TOSER'],
      ['CONSERVAR','CONVERSAR']
    ];


    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);  
        this.nuevoJuego();
    }
  
    nuevoJuego(){

      let i;
      let j;
      do{
        i=Math.floor(Math.random()*this.anagramas.length);
      }while(this.anagramas[i]==undefined || this.anagramas[i]==null);
      console.log(this.anagramas[i]);
      do{
        j=Math.floor(Math.random()*3);
      }while(this.anagramas[i][j]==undefined || this.anagramas[i][j]==null);
      console.log(this.anagramas[i][j]);
      this.anagramaElegido=this.anagramas[i];
      this.palabraElegida=this.anagramas[i][j];


    }



    public verificar():any{
      console.log('Verificando palabra');
      if(this.anagramaElegido.includes(this.palabraIngresada.toUpperCase()))
        return true;  
      else  
        return false;
    }



      
    public calcularPuntaje(valorLineaGanadora){


    }



}
