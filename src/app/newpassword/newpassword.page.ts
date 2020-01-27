import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {

   
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public email: string
  public password: string
  public forgotEmail: string

  constructor(private formBuilder: FormBuilder,public afAuth: AngularFireAuth, public authenticationService: AuthenticationService, private router: Router, public modalController: ModalController) { }
  
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


  resetPassword() {
    this.authenticationService.resetPassword(this.forgotEmail)
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is verplicht.' },
      { type: 'pattern', message: 'Voer een geldig emailadres in.' }
    ]
  }


}
