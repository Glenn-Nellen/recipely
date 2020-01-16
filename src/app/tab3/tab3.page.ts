import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseFirestore } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore';
import * as uuid from 'uuid'
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';

//import { firestore } from 'firebase';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{

  public myForm: FormGroup;
  private stepCount: number = 1;
  validations_form: FormGroup;
  errorMessage: string = '';

  recipeName = '';
  category = '';
  ingredients: any;
  mealTime = '';
  people='';
  prepTime='';
  steps='';
  videoLink='';
  id = uuid.v4();
  constructor(public alertController: AlertController, private router: Router, private formBuilder: FormBuilder, private db: AngularFirestore){

    this.myForm = formBuilder.group({
      user: ['', Validators.required]
    });
  }

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

  async uploadAlert() {
    const alert = await this.alertController.create({
      header: 'Recept toevoegen',
      message: 'Controleer eerst of alle velden correct zijn ingevuld',
      buttons: [
        {
          text: 'Annuleer',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Annuleer');
          }
        }, {
          text: 'Bevestig recept',
          handler: () =>  { 
            console.log('Bevestig recept');
            this.uploadRecipe();
            this.clearInputs();
            this.uploadDone();

          }
        }
      ]
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async uploadDone() {
    const alert = await this.alertController.create({
      header: 'Recept',
      message: 'Recept is aangemaakt',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  clearInputs(){
  this.recipeName = '';
  this.ingredients = '';
  this.category = '';
  this.mealTime = '';
  this.people='';
  this.prepTime='';
  this.steps='';
  this.videoLink='';
  }

  uploadRecipe(){
    this.db.collection('recipe').add({category: this.category, 
      name: this.recipeName, 
      ingredient: this.ingredients, 
      mealTime: this.mealTime, 
      people: this.people, 
      preptime: this.prepTime, 
      steps: this.steps, 
      video: this.videoLink, 
      id: this.id})
  }

  addControl(){
    this.stepCount++;
    this.myForm.addControl('step' + this.stepCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }
}
