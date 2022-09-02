import { Component } from '@angular/core';
import { UserInfo } from './core/services/interfaces/user';
import { SpotifyService } from './core/services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-music-app-challenge';
  menuItems: any[] = [];
  currentUser: UserInfo = {
    name: '',
    image: '',
  };

  constructor(private spotifyService: SpotifyService) {
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

    this.getCurrentUser();
  }

  hideNavbar(): boolean {
    return window.location.pathname === '/login';
  }

  getCurrentUser() {
    this.spotifyService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }
}
