import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //isLoggedIn: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
  }
  public async signIn(usuario: Jugador, recordar?: boolean){
    let persistance= recordar? 'local': 'session';
    this.afAuth.setPersistence(persistance)
    .then(()=> {
      return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.clave)
      .then(()=>{
        localStorage.removeItem('email');
        sessionStorage.removeItem('email');
        localStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isLoggedIn');
        
        if(recordar){
          localStorage.setItem('email', usuario.email);
          localStorage.setItem('isLoggedIn', '1'); 
        }
        else{
          sessionStorage.setItem('email', usuario.email);   
          sessionStorage.setItem('isLoggedIn', '1');     
        }
      });
    })

    
    //.catch(err=>console.log('Servicio Auth: '+err));
  }
  public async signOut(){
    await this.afAuth.signOut()
    .then(()=>{
      localStorage.setItem('email', 'Anonimo');
      localStorage.setItem('isLoggedIn', '0');
      sessionStorage.setItem('email', 'Anonimo');
      sessionStorage.setItem('isLoggedIn', '0');
      this.router.navigate(['/']);      
    })
    .catch(err=>console.log('Servicio Auth: '+err));

  }
  public async register(usuario: Jugador){
    return this.afAuth.createUserWithEmailAndPassword(usuario.email,usuario.clave);
  }
   public async getCurrentUser(){
    return (await this.afAuth.currentUser).email;
  }

  public async resetClave(emailAddress){
    return this.afAuth.sendPasswordResetEmail(emailAddress);
    
  }


  
}

