import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Store } from '@ngrx/store';
import { TrackInfo } from 'src/app/core/interfaces/track';
import { UserInfo } from 'src/app/core/interfaces/user';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { loadUserDetails } from 'src/app/core/store/user/user.actions';

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

  constructor(private store: Store<any>) {
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
    this.getCurrentUser();
  }

  // saveFavoriteTrack(id: string) {
  //   this.spotifyService.saveFavoriteTrack(id).subscribe();
  //   this.toast.show('Añadido a favoritos', {
  //     icon: '💚',
  //     position: 'bottom-right',
  //   });
  // }

  getCurrentUser() {
    this.store.dispatch(loadUserDetails());
  }
}
