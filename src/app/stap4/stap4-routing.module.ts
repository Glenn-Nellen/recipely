import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stap4Page } from './stap4.page';

const routes: Routes = [
  {
    path: '',
    component: Stap4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stap4PageRoutingModule {}
