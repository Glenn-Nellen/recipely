import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NieuwwachtwoordPage } from './nieuwwachtwoord.page';

const routes: Routes = [
  {
    path: '',
    component: NieuwwachtwoordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NieuwwachtwoordPageRoutingModule {}
