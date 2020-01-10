import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meatrecipes',
  templateUrl: './meatrecipes.page.html',
  styleUrls: ['./meatrecipes.page.scss'],
})
export class MeatrecipesPage implements OnInit {
  public recipeList: any[];
  public loadedRecipeList: any[];
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.firestore.collection(`recipe`, ref => ref.where('category', '==', 'Vlees')).valueChanges()
    .subscribe(recipeList => { 
      this.recipeList = recipeList;
      this.loadedRecipeList = recipeList;
    });
  }

  initializeItems(): void {
    this.recipeList = this.loadedRecipeList;
  }

  toRecipe(id) {
    console.log(id)
    this.router.navigate(["recept"]);
  }

  values = '';
  filterList(event: any) {
    this.values += event.target.value + ' | ';
    
    console.log(this.values)
    this.initializeItems();
    
  
    const searchTerm = event.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
    
    this.recipeList = this.recipeList.filter(recipe => {
      if (recipe.ingredient && searchTerm) {
        if (recipe.ingredient.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    
  }
}
