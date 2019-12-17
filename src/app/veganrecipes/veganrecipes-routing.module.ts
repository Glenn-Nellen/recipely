import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeganrecipesPage } from './veganrecipes.page';

const routes: Routes = [
  {
    path: '',
    component: VeganrecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeganrecipesPageRoutingModule {}
