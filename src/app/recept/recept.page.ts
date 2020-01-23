import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.page.html',
  styleUrls: ['./recept.page.scss'],
})
export class ReceptPage implements OnInit {
receptid = ''
recipeName = ''
public recipe: any[];

  constructor( private navCtrl: NavController, private firestore: AngularFirestore, private router: Router) {
  }

  goToSteps(){
    this.router.navigate(["stappen"], { state: {receptid: this.receptid} } );
    
  }

  ngOnInit() {
    this.receptid = this.router.getCurrentNavigation().extras.state.receptid
    this.firestore.collection(`recipe`, ref => ref.where('id', '==', this.receptid)).valueChanges()
    .subscribe(recipeList => { 
     this.recipe = recipeList;
     console.log(this.recipe)
    });
  }
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }
}

