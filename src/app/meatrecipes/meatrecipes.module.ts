import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeatrecipesPageRoutingModule } from './meatrecipes-routing.module';

import { MeatrecipesPage } from './meatrecipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeatrecipesPageRoutingModule
  ],
  declarations: [MeatrecipesPage]
})
export class MeatrecipesPageModule {}
