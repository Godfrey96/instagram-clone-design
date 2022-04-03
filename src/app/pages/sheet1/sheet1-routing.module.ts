import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet1Page } from './sheet1.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet1PageRoutingModule {}
