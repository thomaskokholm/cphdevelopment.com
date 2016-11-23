import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './pages/home';


const routes: Routes = [
  {path: '', component: HomePage}
];


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
