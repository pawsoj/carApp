import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { HomeModule } from './home/home.module';

const viewsRoutes: Routes = [
  {
    path: 'views',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => HomeModule
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(viewsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewsRoutingModule { }
