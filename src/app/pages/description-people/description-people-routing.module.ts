import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionPeoplePage } from './description-people.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionPeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionPeoplePageRoutingModule {}
