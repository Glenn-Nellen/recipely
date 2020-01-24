import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication.service'
 
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
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService
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
 
  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Account is aangemaakt, je kunt inloggen";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }
 
  goLoginPage(){
    this.navCtrl.navigateBack('');
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password)
    this.email = ''
    this.password = ''
  }
 
 
}