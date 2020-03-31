import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokecardsPageRoutingModule } from './pokecards-routing.module';

import { PokecardsPage } from './pokecards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokecardsPageRoutingModule
  ],
  declarations: [PokecardsPage]
})
export class PokecardsPageModule {}
