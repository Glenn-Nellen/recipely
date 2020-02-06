import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.page.html',
  styleUrls: ['./recept.page.scss'],
})
export class ReceptPage implements OnInit {
receptid = ''
recipeName = ''
user = ''
favRef = this.db.collection("favorite")
public recipe: any[];


  constructor(public alertController: AlertController, public afAuth: AngularFireAuth, private navCtrl: NavController, private firestore: AngularFirestore, private router: Router, private db: AngularFirestore) {
  }

  goToSteps(){
    this.router.navigate(["stappen"], { state: {receptid: this.receptid} } );
    
  }
  
  ngOnInit() {
    
    this.user = this.afAuth.auth.currentUser.email
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
  
//Add favorite
  async addFavorite() {
    this.favRef.doc(this.user+'-'+this.receptid).set({
      recipe_id: this.receptid,
      user: this.user,
      name: this.recipeName
    })
    const alert = await this.alertController.create({
      header: 'Notificatie',
      message: 'Recept aan favorieten toegevoegd!',
      buttons: [{text: 'OK'},{text: 'Naar favorieten',handler: () => {
       this.router.navigate(['favorieten'])
      }
    }]
    });
    
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  
 

  goToReview() {
    this.router.navigate(["review"], { state: {receptid: this.receptid} } );
  }

  async deleteFavorite() {
    this.db.collection("favorite").doc(this.user+'-'+this.receptid).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  const alert = await this.alertController.create({
    header: 'Notificatie',
    message: 'Favoriet verwijderd',
    buttons: [{text: 'OK'},{text: 'Naar favorieten',handler: () => {
     this.router.navigate(['favorieten'])
    }
  }]
  });
  
  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);

  }
  
}

