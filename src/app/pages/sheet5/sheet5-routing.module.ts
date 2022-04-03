import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sheet5Page } from './sheet5.page';

const routes: Routes = [
  {
    path: '',
    component: Sheet5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sheet5PageRoutingModule {}
