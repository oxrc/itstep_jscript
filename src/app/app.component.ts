import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/users_get/0" routerLinkActive="active">SEARCH</a>
      <a routerLink="/user_add" routerLinkActive="active">ADD USER</a>
      <a routerLink="/interes_add" routerLinkActive="active">ADD INTEREST</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular USERS System';
}
