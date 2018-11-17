import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const taskRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: HomeComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
