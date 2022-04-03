import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet2Page } from './sheet2.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet2PageRoutingModule {}
