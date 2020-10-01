import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
//

@Injectable({
  providedIn: 'root'
})
export class JuegosPuntajesService {
  juegos: Juego[];
  collectionName= "juegos-puntajes";

  constructor(private db: AngularFirestore) { 
    //this.getPuntajes();
  }

  guardar(juego: Juego){
    this.db.collection(this.collectionName).add({		
      Juego: juego.Juego,		                                          //devuelve una promesa
      Jugador: juego.Jugador,
      Resultado: juego.Resultado,
      Puntaje: juego.Puntaje
    })
    .then((docRef)=> {    console.log("Document written with ID: ", docRef.id);	})
    .catch((error)=> {    console.error("Error adding document: ", error);	});
  
  }

  getPuntajes(): Promise<Juego[]>{
    return new Promise((resolve,reject)=>{
      this.db.collection(this.collectionName).get().subscribe((querySnapshot)=> {
        this.juegos = [];
        querySnapshot.forEach((doc)=> {
            this.juegos.push(doc.data() as Juego);
        });
        console.log("Service");
        console.log( this.juegos);
        resolve(this.juegos);
      },(err)=>console.log(err));
    })



/*
    const coleccionPuntajes = this.db.collection(this.collectionName).valueChanges();
    coleccionPuntajes.subscribe(lista =>{ console.log('valueChanges'+lista);  }); 
    return coleccionPuntajes; */
  }




}
