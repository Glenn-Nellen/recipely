import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpasswordPageRoutingModule } from './newpassword-routing.module';

import { NewpasswordPage } from './newpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewpasswordPage]
})
export class NewpasswordPageModule {}
