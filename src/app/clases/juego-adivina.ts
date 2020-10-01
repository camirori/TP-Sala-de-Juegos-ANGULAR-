import { Juego } from '../clases/juego';

export class JuegoAdivina extends  Juego {
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(jugador?:string) {
        super("Adivina el número",jugador);  
        this.generarnumero();
    }

    public verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
          this.Resultado = true;
          return true;          
        } else {
          return false;
        }
     }
    public generarnumero() {
      this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
      console.info('numero Secreto:' + this.numeroSecreto);
      this.Resultado = false;
      this.numeroIngresado=0;
    }
    
    public retornarAyuda() {
      if (this.numeroIngresado < this.numeroSecreto) {
        return "Falta";
      }
      return "Te pasate";
    }

    public calcularPuntaje(intentos: any){
      if(this.Resultado){
        let puntajePerfectoMenosIntentos=1000-((intentos-1)*10);
        this.Puntaje=puntajePerfectoMenosIntentos<0? 10:puntajePerfectoMenosIntentos;        
      }
      else
        this.Puntaje=0;

    }

  

}
