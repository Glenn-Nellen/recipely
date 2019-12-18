import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MijnreceptenPageRoutingModule } from './mijnrecepten-routing.module';

import { MijnreceptenPage } from './mijnrecepten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MijnreceptenPageRoutingModule
  ],
  declarations: [MijnreceptenPage]
})
export class MijnreceptenPageModule {}
