import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
    

   }
   
   // Signup

   SignUp(email: string, password: string) {
     this.angularFireAuth
     .auth
     .createUserWithEmailAndPassword(email, password)
     .then(res => {
       console.log('Succesfully signed up', res);
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
       console.log('Successfully signed in', res);
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
}
