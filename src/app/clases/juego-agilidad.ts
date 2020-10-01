import { Juego } from '../clases/juego';

export class JuegoAgilidad extends  Juego{
    numeroIngresado = 0;
    operando1;
    operando2;
    operador: String;
    respuesta: Number;

    constructor(jugador?:string) {
      super("Agilidad aritmetica",jugador);  
      this.generarOperacion();
      //console.log(this);
    }

    generarOperacion(){
      this.operando1 = Math.floor((Math.random() * 100) + 1);
      this.operando2 = Math.floor((Math.random() * 100) + 1);
      let op = Math.floor((Math.random() * 4) + 1);
      console.log(op);
      switch(op){
        case 1:
          this.respuesta= Math.floor(this.operando1+this.operando2);
          this.operador='+';
          break;
        case 2:
          this.respuesta= Math.floor(this.operando1-this.operando2);
          this.operador='-';
          break;
        case 3:
          this.respuesta= Math.floor(this.operando1*this.operando2);
          this.operador='x';
          break;
        case 4:
          this.respuesta= Math.floor(this.operando1/this.operando2);
          this.operador='/';
          break;
      }
      console.log('respuesta '+this.respuesta);

    }

    public verificar():boolean{
      if (this.numeroIngresado == this.respuesta) {
        this.Resultado = true;
        return true;          
      } else {
        this.Resultado=false;
        return false;
      }
    }

    public calcularPuntaje(tiempo: any){
      if(this.Resultado){
        let puntajePerfectoMenosTiempo=1000-(tiempo*20);
        this.Puntaje=puntajePerfectoMenosTiempo<0? 10:puntajePerfectoMenosTiempo;        
      }
      else
        this.Puntaje=0;


    }


}
