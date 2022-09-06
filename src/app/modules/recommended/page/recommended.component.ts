import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { loadRecommendedTracks } from '@store/recommended/recommended.actions';
import { selectRecommendedTracks } from '@store/recommended/recommended.selectors';
import { TrackInfo } from '@core/interfaces/track';
import { addFavoriteTrack } from '@core/store/favorites/favorites.actions';
import { AppState } from '@core/store/app.state';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
  tracks$: Observable<TrackInfo[]> = this.store.select(selectRecommendedTracks);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getRecommendations();
  }

  getRecommendations() {
    this.store.dispatch(loadRecommendedTracks());
  }

  addFavoriteTrack(track: TrackInfo) {
    this.store.dispatch(addFavoriteTrack({ trackInfo: track }));
  }
}
