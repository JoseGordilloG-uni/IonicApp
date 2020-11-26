import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'planets/:id',
    loadChildren: () => import('./pages/description-planets/description-planets.module').then( m => m.DescriptionPlanetsPageModule)
  },
  {
    path: 'people/:id',
    loadChildren: () => import('./pages/description-people/description-people.module').then( m => m.DescriptionPeoplePageModule)
  },
  {
    path: 'starships/:id',
    loadChildren: () => import('./pages/description-starships/description-starships.module').then( m => m.DescriptionStarshipsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
