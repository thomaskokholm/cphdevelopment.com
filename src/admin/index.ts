import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin';


const routes: Routes = [
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
