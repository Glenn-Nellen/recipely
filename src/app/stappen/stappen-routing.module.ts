import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StappenPage } from './stappen.page';

const routes: Routes = [
  {
    path: '',
    component: StappenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StappenPageRoutingModule {}
