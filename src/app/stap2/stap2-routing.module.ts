import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stap2Page } from './stap2.page';

const routes: Routes = [
  {
    path: '',
    component: Stap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stap2PageRoutingModule {}
