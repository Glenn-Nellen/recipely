import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
   }
   // Signup with google
   GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
    
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
    .then((res) => {
        console.log('Login 200', res) 
        this.router.navigate(["tabs/tab1"]);
    }).catch((error) => {
        console.log(error)
    })
  }

  // Signup
   SignUp(email: string, password: string) {
     this.angularFireAuth
     .auth
     .createUserWithEmailAndPassword(email, password)
     .then(res => {
       console.log('Signup 200', res);
       this.router.navigate(["tabs/tab1"]);
     })
     .catch(err => {
       console.log('Error: ', err.message)
     })
   }

   // Sign in

   SignIn(email: string, password: string) {
     this.angularFireAuth
     .auth
     .signInWithEmailAndPassword(email, password)
     .then(res => {
        console.log('SignIn 200', res);
        this.router.navigate(["tabs/tab1"]);
     })
     .catch(err => {
       console.log('Something is wrong: ', err.message)
     })
   }

   // Sign out

   signOut() {
     this.angularFireAuth
     .auth
     .signOut()
   }
   resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
}
