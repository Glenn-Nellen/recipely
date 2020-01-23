import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthenticationService } from '../shared/authentication.service'
import { getLocaleExtraDayPeriods } from '@angular/common';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.page.html',
  styleUrls: ['./recept.page.scss'],
})
export class ReceptPage implements OnInit {
receptid = ''
recipeName = ''
public recipe: any[];

  constructor(public afAuth: AngularFireAuth, public authenticationService: AuthenticationService, private firestore: AngularFirestore, private router: Router,  private db: AngularFirestore) {
  }
  user = this.afAuth.auth.currentUser.email
  ngOnInit() {
    this.recipeName = this.router.getCurrentNavigation().extras.state.recipeName
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
  addFavorite() {
    this.db.collection('favorite').add({
      recipe_id: this.receptid,
      user: this.user,
      name: this.recipeName
      })
  }
}

