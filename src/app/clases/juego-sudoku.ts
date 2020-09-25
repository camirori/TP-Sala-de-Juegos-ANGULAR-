import { Juego } from '../clases/juego';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

export class JuegoSudoku extends Juego {
    casilleros;
    Tabla;
    tablaInput;
    numerosIngresados;
    gano;

    asignarTabla(tamaño){
        //if(tamaño==2){
        let solvable;

        do{            
            this.Tabla={ 
                        zona:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                        },
                        fila:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                        },
                        columna:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                        }
                
                    };
            this.casilleros={0:undefined,1:undefined,2:undefined,3:undefined,
                            4:undefined,5:undefined,6:undefined,7:undefined,
                            8:undefined,9:undefined,10:undefined,11:undefined,
                            12:undefined,13:undefined,14:undefined,15:undefined,};
            

            solvable=this.nuevoJuego2x2();                
        }while(!solvable);


        this.limpiarTablasInput();
        /* }else{
            this.Tabla={ 
                        zona:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                            5: [],
                            6: [],
                            7: [],
                            8: [],
                            9: []
                        },
                        fila:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                            5: [],
                            6: [],
                            7: [],
                            8: [],
                            9: []
                        },
                        columna:{
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                            5: [],
                            6: [],
                            7: [],
                            8: [],
                            9: []
                        }
                
                    };
            this.casilleros={0:undefined,1:undefined,2:undefined,3:undefined,4:undefined,5:undefined,6:undefined,7:undefined,8:undefined,
                            9:undefined,10:undefined,11:undefined,12:undefined,13:undefined,14:undefined,15:undefined,16:undefined,17:undefined,
                            18:undefined,19:undefined,20:undefined,21:undefined,22:undefined,23:undefined,24:undefined,25:undefined,26:undefined,
                            27:undefined,28:undefined,29:undefined,30:undefined,31:undefined,32:undefined,33:undefined,34:undefined,35:undefined,
                            36:undefined,37:undefined,38:undefined,39:undefined,40:undefined,41:undefined,42:undefined,43:undefined,44:undefined,
                            45:undefined,46:undefined,47:undefined,48:undefined,49:undefined,50:undefined,51:undefined,52:undefined,53:undefined,
                            54:undefined,55:undefined,56:undefined,57:undefined,58:undefined,59:undefined,60:undefined,61:undefined,62:undefined,
                            63:undefined,64:undefined,65:undefined,66:undefined,67:undefined,68:undefined,69:undefined,70:undefined,71:undefined,
                            72:undefined,73:undefined,74:undefined,75:undefined,76:undefined,77:undefined,78:undefined,79:undefined,80:undefined,
                        };
            this.nuevoJuego3x3();
        } */
    }



    resultado;      

    constructor(tamaño?: number, nombre?: string, gano?: boolean, jugador?:string,) {
        super("Memotest",gano,jugador);
        this.asignarTabla(tamaño);
    }

    nuevoJuego2x2(){

        let casillero=0;
        let z=1;
        let c;
        let f;
        for(f=1;f<5;f++){         
            if(z>f)
                z-=2;                
            for(c=1;c<5;c++){
                let posibleNumero;
                let stop=[];
                do{
                    if(stop.length==4){
                        console.log('No se puede resolver');
                        return false;                            
                    }
                    posibleNumero=Math.floor(Math.random()*4)+1;
                    if(!stop.includes(posibleNumero))
                        stop.push(posibleNumero);
                }while(this.Tabla.zona[z].includes(posibleNumero) || this.Tabla.fila[f].includes(posibleNumero)|| this.Tabla.columna[c].includes(posibleNumero)); 
                this.Tabla.zona[z].push(posibleNumero);
                this.Tabla.fila[f].push(posibleNumero);
                this.Tabla.columna[c].push(posibleNumero);
                this.casilleros[casillero]=posibleNumero;
                casillero++;
                console.log('f'+f+'z'+z+'c'+c);
                if(c%2==0)
                    z++;     
            }
        }
        console.log('Asignaciones:')
        console.log(this.casilleros);        
        return true;
    }

    /*nuevoJuego3x3(){
        let casillero=0;
        let z=1;
        let c;
        let f;
        for(f=1;f<10;f++){         //tarjetas
            //for(z=1;z<=f;){
                if(z>f)
                    z-=3;                
                for(c=1;c<10;c++){
                    let posibleNumero;
                    let stop=[];
                    do{
                        if(stop.length==9){
                            console.log('No se puede resolver');
                            return;                            
                        }
                        posibleNumero=Math.floor(Math.random()*9)+1;
                        if(!stop.includes(posibleNumero))
                            stop.push(posibleNumero);
                    }while(this.Tabla.zona[z].includes(posibleNumero) || this.Tabla.fila[f].includes(posibleNumero)|| this.Tabla.columna[c].includes(posibleNumero)); 
                    this.Tabla.zona[z].push(posibleNumero);
                    this.Tabla.fila[f].push(posibleNumero);
                    this.Tabla.columna[c].push(posibleNumero);
                    this.casilleros[casillero]=posibleNumero;
                    casillero++;
                    console.log('f'+f+'z'+z+'c'+c+' num'+posibleNumero);
                    if(c%3==0)
                        z++;     
                }

            //}
        }
        console.log('Asignaciones:')
        console.log(this.casilleros);
    }*/

    public verificar(){
        let casillero=0;
        let z=1;
        let c;
        let f;
        for(f=1;f<5;f++){       
            if(z>f)
                z-=2;                
            for(c=1;c<5;c++){
                if(this.tablaInput.zona[z].includes(this.numerosIngresados[casillero]) 
                    || this.tablaInput.fila[f].includes(this.numerosIngresados[casillero])
                    || this.tablaInput.columna[c].includes(this.numerosIngresados[casillero])){
                        this.limpiarTablasInput();
                        return false;                        
                    }
                this.tablaInput.zona[z].push(this.numerosIngresados[casillero]);
                this.tablaInput.fila[f].push(this.numerosIngresados[casillero]);
                this.tablaInput.columna[c].push(this.numerosIngresados[casillero]);
                casillero++;
                console.log('f'+f+'z'+z+'c'+c);
                if(c%2==0)
                    z++;     
            }
        }
        this.gano=true;
        return true;
    }

    limpiarTablasInput(){
        this.tablaInput={ 
            zona:{
                1: [],
                2: [],
                3: [],
                4: [],
            },
            fila:{
                1: [],
                2: [],
                3: [],
                4: [],
            },
            columna:{
                1: [],
                2: [],
                3: [],
                4: [],
            }
    
        };
        this.numerosIngresados=[];
    }

    public calcularPuntaje(tiempo){


    }




}
