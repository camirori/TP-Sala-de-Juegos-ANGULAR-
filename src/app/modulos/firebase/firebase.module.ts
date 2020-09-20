import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'

import { environment } from 'src/environments/environment';

const FirebaseComponents = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule
]

@NgModule({
  imports: [FirebaseComponents],
  exports: [FirebaseComponents],
})

export class FirebaseModule { }
