import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FishrecipesPage } from './fishrecipes.page';

const routes: Routes = [
  {
    path: '',
    component: FishrecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FishrecipesPageRoutingModule {}
