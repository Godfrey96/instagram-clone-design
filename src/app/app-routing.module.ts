import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sheet1',
    loadChildren: () => import('./pages/sheet1/sheet1.module').then( m => m.Sheet1PageModule)
  },
  {
    path: 'sheet2',
    loadChildren: () => import('./pages/sheet2/sheet2.module').then( m => m.Sheet2PageModule)
  },
  {
    path: 'sheet3',
    loadChildren: () => import('./pages/sheet3/sheet3.module').then( m => m.Sheet3PageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'sheet4',
    loadChildren: () => import('./pages/sheet4/sheet4.module').then( m => m.Sheet4PageModule)
  },
  {
    path: 'sheet5',
    loadChildren: () => import('./pages/sheet5/sheet5.module').then( m => m.Sheet5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
