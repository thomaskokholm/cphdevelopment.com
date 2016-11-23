import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './pages/about';


const routes: Routes = [
  {path: 'about', component: AboutPage}
];


@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutModule {}
