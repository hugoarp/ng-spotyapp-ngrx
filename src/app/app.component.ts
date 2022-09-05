import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-music-app-challenge';

  constructor() {}

  hideNavbar(): boolean {
    return window.location.pathname === '/login';
  }
}
