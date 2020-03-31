import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pokelist',
    loadChildren: () => import('./pokelist/pokelist.module').then( m => m.PokelistPageModule)
  },
  {
    path: 'pokecards',
    loadChildren: () => import('./pokecards/pokecards.module').then( m => m.PokecardsPageModule)
  },
  {
    path: 'pokelist/:id',
    loadChildren: () => import('./pokecards/pokecards.module').then( m => m.PokecardsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
