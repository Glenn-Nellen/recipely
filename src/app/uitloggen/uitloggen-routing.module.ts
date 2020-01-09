import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UitloggenPage } from './uitloggen.page';

const routes: Routes = [
  {
    path: '',
    component: UitloggenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UitloggenPageRoutingModule {}
