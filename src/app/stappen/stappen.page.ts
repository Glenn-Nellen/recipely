import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-stappen",
  templateUrl: "./stappen.page.html",
  styleUrls: ["./stappen.page.scss"]
})
export class StappenPage implements OnInit {
  receptid = "";
  recipeName = "";
  public recipe: any[];

  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.receptid = this.router.getCurrentNavigation().extras.state.receptid;
    this.firestore
      .collection(`recipe`, ref => ref.where("id", "==", this.receptid))
      .valueChanges()
      .subscribe(recipeList => {
        this.recipe = recipeList;
        console.log(this.recipe);
      });
  }

  // Convert database information to array in order to display it correctly
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key]);
  }
}
