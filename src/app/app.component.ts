import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-music-app-challenge';
  menuItems: any[] = [];

  constructor() {
    this.menuItems = [
      {
        icon: 'home',
        label: 'Inicio',
        route: '/',
      },
      {
        icon: 'favorite',
        label: 'Favoritos',
        route: '/favoritos',
      },
    ];
  }
}
