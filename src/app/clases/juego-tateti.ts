import { Juego } from '../clases/juego';
export class JuegoTateti extends Juego{
    casilleros={0:undefined,1:undefined,2:undefined,
                3:undefined,4:undefined,5:undefined,
                6:undefined,7:undefined,8:undefined};

    lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];

    resultado;      //0 empate, 

    constructor( jugador?:string) {
        super("Ta-Te-Ti",jugador);  
        //this.nuevoJuego();
    }


    jugadaJugador(casillero){
        if(this.casilleros[casillero]!=undefined){
            return false;
        }
        this.casilleros[casillero]=1;
        return true;
    }

    jugadaMaquina(): number {
        let casillero;
        do{
            casillero = Math.floor(Math.random()*9);
        }while(this.casilleros[casillero]!=undefined);
        this.casilleros[casillero]=2;
        return casillero;

    }
    public verificar(){
        for (let i = 0; i < this.lines.length; i++) {
            const [a, b, c] = this.lines[i];
            if (
                this.casilleros[a]!=undefined &&
                this.casilleros[a] === this.casilleros[b] &&
                this.casilleros[a] === this.casilleros[c]
            ) {
                this.resultado=this.casilleros[this.lines[i][0]];
                return this.lines[i];       //los casilleros que forman la línea
            }
        }
        for(let casillero in this.casilleros){
            if(this.casilleros[casillero]==undefined)
                return null;            //tdv se puede seguir jugando
        }
        this.resultado=0;
        return  null;          //empate

    }

    public calcularPuntaje(resultado){
        if(this.resultado==1){
            this.Resultado=true;            
            this.Puntaje=1000;
        }
        else if(this.resultado==2){
            this.Resultado=false;            
            this.Puntaje=0;
        }
        else if(this.resultado==0){
            this.Resultado=true;
            this.Puntaje=200;
        }


    }

}
