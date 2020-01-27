import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NieuwwachtwoordPageRoutingModule } from './nieuwwachtwoord-routing.module';

import { NieuwwachtwoordPage } from './nieuwwachtwoord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NieuwwachtwoordPageRoutingModule
  ],
  declarations: [NieuwwachtwoordPage]
})
export class NieuwwachtwoordPageModule {}
