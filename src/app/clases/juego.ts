import { Jugador } from '../clases/jugador';
export abstract class Juego {
    public Juego = 'Sin Nombre';
    public Jugador: string;
    public Resultado = false;
    public Puntaje=0;
  
    constructor(nombre?: string,jugador?:string) {
      if (nombre)
        this.Juego = nombre;
      if(jugador)
        this.Jugador=jugador;
      else
        this.Jugador= "natalia natalia";
    }

    public abstract verificar():any; 
    public abstract calcularPuntaje(criterio: any);
    
    public retornarAyuda() {
      return "NO hay ayuda definida";
    }

  }
