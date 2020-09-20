export class Jugador {
    email: string;
    clave: string;

    constructor(email: string, clave: string){
        this.email=email;
        this.clave=clave;
    }

    static usuarioPrueba: Jugador;

    static Registrar(email: string, clave: string){
        Jugador.usuarioPrueba= new Jugador(email,clave);
    }
}
