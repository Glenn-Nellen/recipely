import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service'

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page{

  constructor(public authenticationService: AuthenticationService, private router: Router){}
  toMeatRecipes(category) {
    this.router.navigate(["categories"], { state: {category: category} } );
  }

  toFishRecipes(category) {
    this.router.navigate(["categories"], { state: {category: category} } );    
  }

  toVeganRecipes(category) {
    this.router.navigate(["categories"], { state: {category: category} } );  }
}
