import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sheet5PageRoutingModule } from './sheet5-routing.module';

import { Sheet5Page } from './sheet5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sheet5PageRoutingModule
  ],
  declarations: [Sheet5Page]
})
export class Sheet5PageModule {}
