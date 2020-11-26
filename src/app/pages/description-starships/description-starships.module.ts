import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionStarshipsPageRoutingModule } from './description-starships-routing.module';

import { DescriptionStarshipsPage } from './description-starships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionStarshipsPageRoutingModule
  ],
  declarations: [DescriptionStarshipsPage]
})
export class DescriptionStarshipsPageModule {}
