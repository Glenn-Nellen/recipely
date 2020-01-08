import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseFirestore } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore';
import * as uuid from 'uuid'
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
//import { firestore } from 'firebase';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{

  public myForm: FormGroup;
  private stepCount: number = 1;

  recipeName = '';
  category = '';
  ingredients: any;
  mealTime = '';
  people='';
  prepTime='';
  steps='';
  videoLink='';
  id = uuid.v4();
  constructor(private fileChooser: FileChooser, private file: File, private router: Router, formBuilder: FormBuilder, private db: AngularFirestore){

    this.myForm = formBuilder.group({
      user: ['', Validators.required]
    });
  }

  uploadRecipe(){
    console.log(this.recipeName, this.ingredients, this.mealTime, this.people, this.prepTime, this.steps, this.videoLink);
    this.db.collection('recipe').add({category: this.category, name: this.recipeName, ingredient: this.ingredients, mealTime: this.mealTime, people: this.people, preptime: this.prepTime, steps: this.steps, video: this.videoLink, id: this.id})
  }

  addControl(){
    this.stepCount++;
    this.myForm.addControl('step' + this.stepCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }
}
