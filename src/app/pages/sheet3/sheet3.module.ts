import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet3PageRoutingModule } from './sheet3-routing.module';

import { Sheet3Page } from './sheet3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet3PageRoutingModule
  ],
  declarations: [Sheet3Page]
})
export class Sheet3PageModule {}
