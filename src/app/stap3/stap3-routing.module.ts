import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stap3Page } from './stap3.page';

const routes: Routes = [
  {
    path: '',
    component: Stap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stap3PageRoutingModule {}
