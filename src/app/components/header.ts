import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-app',
    template: `
        <nav>
            <a routerLink="/" routerLinkActive="active">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/admin" routerLinkActive="active">Admin</a>
        </nav>
    `
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}