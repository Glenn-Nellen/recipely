import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase';

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

  public checkEmail = false
  constructor(public alertController: AlertController, private formBuilder: FormBuilder,public afAuth: AngularFireAuth, private router: Router, public modalController: ModalController) { }
  
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
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(this.validations_form.get('email').value)
    .then((res) => {this.checkEmail = true, this.errorMessage = 'Success!'})
    .catch((error) => {this.checkEmail = false, this.errorMessage = error})
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is verplicht.' },
      { type: 'pattern', message: 'Voer een geldig emailadres in.' }
    ]
  }

  async uploadAlert() {
    console.log(this.checkEmail)
    this.resetPassword()
    console.log(this.checkEmail)
    if(this.checkEmail) {
      const alert = await this.alertController.create({
        header: 'Notificatie',
        message: 'Mail gestuurd',
        buttons: [ {
            text: 'Ok',
            handler: () =>  {
            
              console.log('Sent email');  
            }
          }
        ]
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    
    } else {
      const alert = await this.alertController.create({
        header: 'Notificatie',
        message: 'Deze email is niet geldig of is niet bekend in ons systeem.',
        buttons: ['OK'],
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result)
    }
      
  }

  async uploadDone() {
    const alert = await this.alertController.create({
      header: 'Notificatie',
      message: 'Email verstuurd',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
