import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { AuthenticationService } from '../shared/authentication.service'
@Component({
  selector: 'app-favorieten',
  templateUrl: './favorieten.page.html',
  styleUrls: ['./favorieten.page.scss'],
})
export class FavorietenPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, public authenticationService: AuthenticationService, private firestore: AngularFirestore, private router: Router,  private db: AngularFirestore) { }
  user = this.afAuth.auth.currentUser.email
  public favoriteList: any[]
  ngOnInit() {
    this.firestore.collection(`favorite`, ref => ref.where('user', '==', this.user )).valueChanges()
    .subscribe(favoriteList => { 
      this.favoriteList = favoriteList;
      console.log(this.favoriteList)
    })
  }

  toRecipe(id, name) {
    // console.log(id)
    this.router.navigate(["recept"], { state: {receptid: id, recipeName: name} } );
  }

}
