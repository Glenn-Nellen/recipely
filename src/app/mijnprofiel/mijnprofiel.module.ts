import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MijnprofielPageRoutingModule } from './mijnprofiel-routing.module';

import { MijnprofielPage } from './mijnprofiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MijnprofielPageRoutingModule
  ],
  declarations: [MijnprofielPage]
})
export class MijnprofielPageModule {}
