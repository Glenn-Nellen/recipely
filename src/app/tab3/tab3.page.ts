import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as uuid from 'uuid'
import { AlertController } from '@ionic/angular';


//import { firestore } from 'firebase';

export interface Image {
  id: string;
  image: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{

  url: any;
  newImage: Image = {
    id: this.afs.createId(), 
    image: ''
  }

  loading: boolean = false;;

  public myForm: FormGroup;
  private stepCount: number = 1;

  validations_form: FormGroup;
  errorMessage: string = '';
  event: any;

  recipeName = '';
  category = '';
  ingredients: any;
  mealTime = '';
  people='';
  prepTime='';
  steps='';
  videoLink='';
  id = uuid.v4();
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public alertController: AlertController, private router: Router, private formBuilder: FormBuilder, private db: AngularFirestore){

    this.myForm = formBuilder.group({
      user: ['', Validators.required]
    });
  }
  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      recipeName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^.[a-zA-Z.]+$')
      ])),
      personen: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[1-50.]')
      ])),
      minuten: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[1-9.]')
      ])),
    });
  }
    saveEvent(event) {
      this.event = event.target.files[0]
    }
    uploadImage() {
    this.loading = true;
      var reader = new FileReader();
     
      reader.readAsDataURL(this.event);
      // For Preview Of Image
      reader.onload = (e:any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      
        // For Uploading Image To Firebase
        const fileraw = this.event;
        console.log(fileraw)
        const filePath = '/Image/' + 'Image' + uuid.v4();
        const result = this.SaveImageRef(filePath, fileraw);
        const ref = result.ref;
        result.task.then(a => {
          ref.getDownloadURL().subscribe(a => {
            console.log(a);
            
            this.newImage.image = a;
            this.loading = false;
            this.db.collection('recipe').add({category: this.category, 
              name: this.validations_form.get('recipeName').value, 
              // ingredient: this.ingredients, 
              mealTime: this.mealTime, 
              people: this.people, 
              preptime: this.prepTime, 
              steps: this.steps, 
              video: this.videoLink, 
              id: this.id,
              image: this.newImage.image})
            // this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);

          });

          
        });
      }, error => {
        alert("Error");
      }

    
  }

  SaveImageRef(filePath, file) {

    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  }

 
  validation_messages = {
    'recipeName': [
      { type: 'required', message: 'Naam is verplicht.' },
      { type: 'pattern', message: 'Voer een geldige naam in.' }
    ],
    'personen': [
      { type: 'required', message: 'Aantal personen is verplicht' },
      { type: 'pattern', message: 'U kunt voor maximaal 50 personen kiezen.' }
    ],
    'minuten': [
      { type: 'required', message: 'Aantal minuten is verplicht' },
      { type: 'pattern', message: 'U kunt voor maximaal 30 minuten kiezen' }
    ]
  };
 
  //Functie voor het uploaden van recept
  async uploadAlert() {
    console.log(this.validations_form.get('recipeName').value);
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
            // this.uploadRecipe(); // Stuurt het recept naar Firebase
            this.uploadImage();
            this.clearInputs(); // Zorgt ervoor dat alle inputs leeg zijn
            this.uploadDone();  // Zorgt ervoor dat je een notificatie krijgt als je een recept hebt aangemaakt.

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
  // Verwijderd de inputs in het forumulier
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

  //Stuurt alle ingevulde velden in het formulier door naar Firebase
  uploadRecipe(){
    this.db.collection('recipe').add({category: this.category, 
      name: this.recipeName, 
      // ingredient: this.ingredients, 
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
