import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { TrackInfo } from 'src/app/core/services/interfaces/track';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteTracks: TrackInfo[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.getUserFavorites();
  }

  getUserFavorites() {
    this.spotifyService.getUserFavorites().subscribe((res) => {
      this.favoriteTracks = res;
    });
  }

  deleteFavoriteTrack(id: string) {
    this.spotifyService.deleteFavoriteTrack(id).subscribe((res) => {
      this.toast.show('Eliminado de favoritos', {
        icon: '💔',
        position: 'bottom-right',
      });
      this.getUserFavorites();
    });
  }
}
