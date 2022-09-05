import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/core/services/interfaces/user';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
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
        route: '/inicio',
      },
      {
        icon: 'favorite',
        label: 'Favoritos',
        route: '/favoritos',
      },
    ];
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.spotifyService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }
}
