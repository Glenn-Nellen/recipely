import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthenticationService } from '../shared/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})
export class LoginPage implements OnInit {

  public email: string
  public password: string

  constructor(public authenticationService: AuthenticationService, private router: Router, public modalController: ModalController) {}
  
  signUp() {
      this.authenticationService.SignUp(this.email, this.password)
      this.email = ''
      this.password = ''
    }
  signIn() {
    this.authenticationService.SignIn(this.email, this.password)
    this.email = ''
    this.password = ''
  }

  signOut() {
    this.authenticationService.signOut()
  }
  loggedIn() {
    this.router.navigate(["tabs/tab1"]);
  }

  ngOnInit() {
  }
  
  // toRegisterPage() {
  //   this.router.navigate(["register"]);
  // }

  // toLoginPage() {
  //   this.router.navigate(["inloggen"]);
  // }
  // skipLogin() {
  //   this.router.navigate(['/tabs/tab1'])
  // }
  // goLoginPage() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }
}
