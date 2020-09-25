import { Juego } from '../clases/juego';

export class JuegoSudoku extends Juego {
    casilleros={0:undefined,1:undefined,2:undefined,3:undefined,
        4:undefined,5:undefined,6:undefined,7:undefined,
        8:undefined,9:undefined,10:undefined,11:undefined,
        12:undefined,13:undefined,14:undefined,15:undefined,};

    Tabla={ 
        zona:{
            1: {0: false, 1: false, 2: false, 3: false},
            2: {0: false, 1: false, 2: false, 3: false},
            3: {0: false, 1: false, 2: false, 3: false},
            4: {0: false, 1: false, 2: false, 3: false},
        },
        fila:{
            1: {0: false, 1: false, 2: false, 3: false},
            2: {0: false, 1: false, 2: false, 3: false},
            3: {0: false, 1: false, 2: false, 3: false},
            4: {0: false, 1: false, 2: false, 3: false},
        },
        columna:{
            1: {0: false, 1: false, 2: false, 3: false},
            2: {0: false, 1: false, 2: false, 3: false},
            3: {0: false, 1: false, 2: false, 3: false},
            4: {0: false, 1: false, 2: false, 3: false},
        }

    };

    resultado;      

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Memotest",gano,jugador);  
        this.nuevoJuego();
    }

    nuevoJuego(){

        for(let i=0; i<16; i++){         //tarjetas
            for(let j=0; j<2;j++){
                console.log("Asignando tarjeta"+i +' '+j);
                let casillero;
                do{
                    casillero = Math.floor(Math.random()*16);
                }while(this.casilleros[casillero]!=undefined);
                this.casilleros[casillero]=i;                
            }

        }
        console.log('Asignaciones:')
        console.log(this.casilleros);
    }

    verificarJugada(casillero1, casillero2){
        // if(this.casilleros[casillero1]==this.casilleros[casillero2]){
        //  //   this.tarjetas[this.casilleros[casillero1]]=true;                //no volver a girar y disable
        //     return true;
        // }
        // return false;                                                       //volver a girar y habilitar boton
    }

    public verificar(){
        //  //   for(let tarjeta in this.tarjetas){
        //    //     if(this.tarjetas[tarjeta]==false)
        //             return false;            //seguir jugando
        //     }
        //    // this.resultado=0;
             return  true;          //gano

    }

    public calcularPuntaje(valorLineaGanadora){


    }




}
