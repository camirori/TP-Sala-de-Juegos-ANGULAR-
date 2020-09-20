import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean= false;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  public async signIn(usuario: Jugador){
    return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.clave);
  }
  public async signOut(){
    await this.afAuth.signOut();
    this.isLoggedIn= false;
    this.router.navigate(['/']);
  }
  public async register(usuario: Jugador){
    return this.afAuth.createUserWithEmailAndPassword(usuario.email,usuario.clave);
  }
   public async getCurrentUser(){
    return this.afAuth.currentUser;
  }
}

