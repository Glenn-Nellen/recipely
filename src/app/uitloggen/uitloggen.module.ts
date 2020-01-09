import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UitloggenPageRoutingModule } from './uitloggen-routing.module';

import { UitloggenPage } from './uitloggen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UitloggenPageRoutingModule
  ],
  declarations: [UitloggenPage]
})
export class UitloggenPageModule {}
