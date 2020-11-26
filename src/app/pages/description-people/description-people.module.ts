import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionPeoplePageRoutingModule } from './description-people-routing.module';

import { DescriptionPeoplePage } from './description-people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionPeoplePageRoutingModule
  ],
  declarations: [DescriptionPeoplePage]
})
export class DescriptionPeoplePageModule {}
