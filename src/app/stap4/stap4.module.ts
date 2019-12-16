import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stap4PageRoutingModule } from './stap4-routing.module';

import { Stap4Page } from './stap4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stap4PageRoutingModule
  ],
  declarations: [Stap4Page]
})
export class Stap4PageModule {}
