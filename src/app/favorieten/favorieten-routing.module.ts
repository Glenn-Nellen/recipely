import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavorietenPage } from './favorieten.page';

const routes: Routes = [
  {
    path: '',
    component: FavorietenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavorietenPageRoutingModule {}
