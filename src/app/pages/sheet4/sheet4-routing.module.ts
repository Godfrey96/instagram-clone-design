import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet4Page } from './sheet4.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet4PageRoutingModule {}
