import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FishrecipesPageRoutingModule } from './fishrecipes-routing.module';

import { FishrecipesPage } from './fishrecipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FishrecipesPageRoutingModule
  ],
  declarations: [FishrecipesPage]
})
export class FishrecipesPageModule {}
