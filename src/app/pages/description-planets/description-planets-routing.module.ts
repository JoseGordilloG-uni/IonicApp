import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionPlanetsPage } from './description-planets.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionPlanetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionPlanetsPageRoutingModule {}
