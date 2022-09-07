import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadFavoritesTracks,
  removeFavoriteTrack,
} from 'src/app/core/store/favorites/favorites.actions';
import { Observable, tap } from 'rxjs';
import { selectFavoritesTracks } from 'src/app/core/store/favorites/favorites.selectors';
import { TrackInfo } from 'src/app/core/interfaces/track';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteTracks$: Observable<TrackInfo[]> = this.store.select(
    selectFavoritesTracks
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getUserFavorites();
  }

  getUserFavorites() {
    this.store.dispatch(loadFavoritesTracks());
  }

  removeFavoriteTrack(trackInfo: TrackInfo) {
    this.store.dispatch(removeFavoriteTrack({ trackInfo }));
  }
}
