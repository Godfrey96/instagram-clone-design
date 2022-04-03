import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet4PageRoutingModule } from './sheet4-routing.module';

import { Sheet4Page } from './sheet4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet4PageRoutingModule
  ],
  declarations: [Sheet4Page]
})
export class Sheet4PageModule {}
