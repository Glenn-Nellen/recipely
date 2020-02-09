import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"]
})
export class CategoriesPage implements OnInit {
  public recipeList: any[];
  public loadedRecipeList: any[];
  category: "";
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    // Get the correct recipes from the database based on categories
    this.category = this.router.getCurrentNavigation().extras.state.category;
    this.firestore
      .collection(`recipe`, ref => ref.where("category", "==", this.category))
      .valueChanges()
      .subscribe(recipeList => {
        this.recipeList = recipeList;
        this.loadedRecipeList = recipeList;
      });
  }
  // Navigate to the clicked recipe
  toRecipe(id, name) {
    this.router.navigate(["recept"], {
      state: { receptid: id, recipeName: name }
    });
  }

  initializeItems(): void {
    this.recipeList = this.loadedRecipeList;
  }

  values = "";
  // filter search results
  filterList(event: any) {
    this.values += event.target.value + " | ";

    console.log(this.values);
    this.initializeItems();

    const searchTerm = event.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.recipeList = this.recipeList.filter(recipe => {
      if (recipe.ingredient && searchTerm) {
        if (
          recipe.ingredient.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        ) {
          return true;
        }
        return false;
      }
    });
  }
}
