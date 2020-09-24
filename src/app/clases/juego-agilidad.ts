import { Juego } from '../clases/juego';

export class JuegoAgilidad extends  Juego{
    numeroIngresado = 0;
    operando1;
    operando2;
    operador: String;
    respuesta: Number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
      super("Agilidad aritmetica",gano,jugador);  
      this.generarOperacion();
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
        this.gano = true;
        return true;          
      } else {
        return false;
      }
    }

    public calcularPuntaje(tiempo: any){


    }


}
