import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptPageRoutingModule } from './recept-routing.module';

import { ReceptPage } from './recept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptPageRoutingModule
  ],
  declarations: [ReceptPage]
})
export class ReceptPageModule {}
