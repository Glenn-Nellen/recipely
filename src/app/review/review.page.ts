import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"]
})
export class ReviewPage implements OnInit {
  constructor(
    public alertController: AlertController,
    public afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private router: Router,
    private db: AngularFirestore
  ) {}
  receptid = "";
  review = "";
  currentRate = 5;
  revDoc = this.db.collection("review");
  user = this.afAuth.auth.currentUser.email;
  public recipe: any[];

  ngOnInit() {
    this.receptid = this.router.getCurrentNavigation().extras.state.receptid;
    this.firestore
      .collection(`review`, ref => ref.where("recipe_id", "==", this.receptid))
      .valueChanges()
      .subscribe(reviewList => {
        this.recipe = reviewList;
        console.log(this.recipe);
        this.recipe.sort(function(a, b) {
          return b.rating - a.rating;
        });
      });
  }

  //Add review
  async addReview() {
    this.revDoc.doc(this.user + "-" + this.receptid).set({
      recipe_id: this.receptid,
      user: this.user,
      review: this.review,
      rating: this.currentRate
    });
    const alert = await this.alertController.create({
      header: "Notificatie",
      message: "Beoordeling is aangemaakt, dit is uw review: " + this.review,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.review = "";
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
