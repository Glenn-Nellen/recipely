import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MijnreceptenPage } from './mijnrecepten.page';

const routes: Routes = [
  {
    path: '',
    component: MijnreceptenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MijnreceptenPageRoutingModule {}
