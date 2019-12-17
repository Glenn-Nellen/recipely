import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeatrecipesPage } from './meatrecipes.page';

const routes: Routes = [
  {
    path: '',
    component: MeatrecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeatrecipesPageRoutingModule {}
