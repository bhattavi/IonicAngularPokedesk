import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokecardsPage } from './pokecards.page';

const routes: Routes = [
  {
    path: '',
    component: PokecardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokecardsPageRoutingModule {}
