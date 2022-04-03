import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet1PageRoutingModule } from './sheet1-routing.module';

import { Sheet1Page } from './sheet1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet1PageRoutingModule
  ],
  declarations: [Sheet1Page]
})
export class Sheet1PageModule {}
