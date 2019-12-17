import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-veganrecipes',
  templateUrl: './veganrecipes.page.html',
  styleUrls: ['./veganrecipes.page.scss'],
})
export class VeganrecipesPage implements OnInit {

  public recipeList: any[];
  public loadedRecipeList: any[];
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection(`recipe`, ref => ref.where('category', '==', 'Vegetarisch')).valueChanges()
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
