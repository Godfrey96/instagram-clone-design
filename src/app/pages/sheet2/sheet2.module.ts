import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet2PageRoutingModule } from './sheet2-routing.module';

import { Sheet2Page } from './sheet2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet2PageRoutingModule
  ],
  declarations: [Sheet2Page]
})
export class Sheet2PageModule {}
