import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeganrecipesPageRoutingModule } from './veganrecipes-routing.module';

import { VeganrecipesPage } from './veganrecipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeganrecipesPageRoutingModule
  ],
  declarations: [VeganrecipesPage]
})
export class VeganrecipesPageModule {}
