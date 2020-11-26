import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionStarshipsPage } from './description-starships.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionStarshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionStarshipsPageRoutingModule {}
