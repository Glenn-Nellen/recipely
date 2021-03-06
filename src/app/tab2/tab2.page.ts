import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.page.html",
  styleUrls: ["./tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    public authenticationService: AuthenticationService,
    private firestore: AngularFirestore,
    private router: Router
  ) {}
  public recipeList: any[];
  public loadedRecipeList: any[];
  user = this.afAuth.auth.currentUser.email;

  ngOnInit() {
    this.firestore
      .collection(`recipe`, ref => ref.where("user", "==", this.user))
      .valueChanges()
      .subscribe(recipeList => {
        this.recipeList = recipeList;
        this.loadedRecipeList = recipeList;
      });
  }
  toRecipe(id) {
    this.router.navigate(["recept"], { state: { receptid: id } });
  }
}
