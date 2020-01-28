import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.page.html',
  styleUrls: ['./inloggen.page.scss'],
})
export class InloggenPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  public email: string
  public password: string
 
  constructor(
 
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
 
  ) { }
 
  ngOnInit() {
 
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
 
 
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is verplicht.' },
      { type: 'pattern', message: 'Voer een geldig emailadres in.' }
    ],
    'password': [
      { type: 'required', message: 'Wachtwoord is verplicht' },
      { type: 'minlength', message: 'Wachtwoord moet minimaal uit 5 karakters bestaan.' }
    ]
  };

  signIn() {
    this.authenticationService.SignIn(this.email, this.password)

  }
 
  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }

  goToNewPasswordPage(){
    this.navCtrl.navigateForward('/newpassword');
  }
 
}
