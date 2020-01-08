import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InloggenPage } from './inloggen.page';

const routes: Routes = [
  {
    path: '',
    component: InloggenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InloggenPageRoutingModule {}
