import { Component } from '@angular/core';


@Component({
  selector: 'app',
  template: `
    <h1>App</h1>
    <header-app></header-app>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
