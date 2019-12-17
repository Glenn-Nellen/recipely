import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-fishrecipes',
  templateUrl: './fishrecipes.page.html',
  styleUrls: ['./fishrecipes.page.scss'],
})
export class FishrecipesPage implements OnInit {
  public recipeList: any[];
  public loadedRecipeList: any[];
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection(`recipe`, ref => ref.where('category', '==', 'Vis')).valueChanges()
    .subscribe(recipeList => { 
      this.recipeList = recipeList;
      this.loadedRecipeList = recipeList;
    });
  }


  initializeItems(): void {
    this.recipeList = this.loadedRecipeList;
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
