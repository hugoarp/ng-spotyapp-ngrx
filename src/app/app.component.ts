import { Component } from '@angular/core';
import { UserInfo } from './core/services/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-music-app-challenge';
  menuItems: any[] = [];

  constructor() {}

  hideNavbar(): boolean {
    return window.location.pathname === '/login';
  }
}
