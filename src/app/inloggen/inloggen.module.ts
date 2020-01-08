import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { InloggenPageRoutingModule } from './inloggen-routing.module';

import { InloggenPage } from './inloggen.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InloggenPageRoutingModule
  ],
  declarations: [InloggenPage]
})
export class InloggenPageModule {}
