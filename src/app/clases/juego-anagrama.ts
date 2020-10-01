import { Juego } from '../clases/juego';
export class JuegoAnagrama extends  Juego {

    palabraElegida:string;
    anagramaElegido: string[];
    palabraIngresada: string;

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


    constructor(jugador?:string) {
        super("Anagrama",jugador);  
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
      if(this.anagramaElegido.includes(this.palabraIngresada.toUpperCase())){
        this.Resultado=true;
        return true;          
      }
      else {
        this.Resultado=false;
         return false;       
      }

    }



      
    public calcularPuntaje(tiempo){
      if(this.Resultado){
        let puntajePerfectoMenosTiempo=1000-(tiempo*10);
        this.Puntaje=puntajePerfectoMenosTiempo<0? 10:puntajePerfectoMenosTiempo;        
      }
      else
        this.Puntaje=0;


    }



}
