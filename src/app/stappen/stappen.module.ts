import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StappenPageRoutingModule } from './stappen-routing.module';

import { StappenPage } from './stappen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StappenPageRoutingModule
  ],
  declarations: [StappenPage]
})
export class StappenPageModule {}
