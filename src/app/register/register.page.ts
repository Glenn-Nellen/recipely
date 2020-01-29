import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
 
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public email: string
  public password: string
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is verplicht.' },
     { type: 'pattern', message: 'Voer een geldig emailadres in.' }
   ],
   'password': [
     { type: 'required', message: 'Wachtwoord is verplicht.' },
     { type: 'minlength', message: 'Wachtwoord moet minimaal uit 5 karakters bestaan.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController
  ) {}
 
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  
  
 
  goLoginPage(){
    this.router.navigate(['inloggen']);
  }

  signUp() {
    this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(this.email, this.password)
    .then(res => {
      console.log('Signup 200', res);
      this.registrationDone()
      
    })
    .catch(err => {
      console.log('Error: ', err.message)
      this.errorMessage = err.message
    })
  }
  
  async registrationDone() {
    const alert = await this.alertController.create({
      header: 'Registratie',
      message: 'De registratie is gelukt, klik op OK om naar de app te gaan',
      buttons: [{text: 'OK', handler: () => {
        this.router.navigate(["tabs/tab1"]);
      }
    }]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}