import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { TrackInfo } from 'src/app/core/services/interfaces/track';
import { UserInfo } from 'src/app/core/services/interfaces/user';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menuItems: any[] = [];
  tracks: TrackInfo[] = [];
  currentUser: UserInfo = {
    name: '',
    image: '',
  };

  constructor(
    private spotifyService: SpotifyService,
    private toast: HotToastService
  ) {
    this.menuItems = [
      {
        icon: 'home',
        label: 'Inicio',
        route: 'recomendados',
      },
      {
        icon: 'favorite',
        label: 'Favoritos',
        route: 'favoritos',
      },
    ];
  }

  ngOnInit(): void {
    this.getRecommendations();
    this.getCurrentUser();
  }

  getRecommendations() {
    this.spotifyService.getRecommendations().subscribe((res) => {
      this.tracks = res;
    });
  }

  saveFavoriteTrack(id: string) {
    this.spotifyService.saveFavoriteTrack(id).subscribe();
    this.toast.show('Añadido a favoritos', {
      icon: '💚',
      position: 'bottom-right',
    });
  }

  getCurrentUser() {
    this.spotifyService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }
}
