import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stap2PageRoutingModule } from './stap2-routing.module';

import { Stap2Page } from './stap2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stap2PageRoutingModule
  ],
  declarations: [Stap2Page]
})
export class Stap2PageModule {}
