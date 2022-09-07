import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectRecommendedTracks } from 'src/app/core/store/recommended/recommended.selectors';
import { TrackInfo } from 'src/app/core/interfaces/track';
import { addFavoriteTrack } from 'src/app/core/store/favorites/favorites.actions';
import { AppState } from 'src/app/core/store/app.state';
import { loadRecommendedTracks } from 'src/app/core/store/recommended/recommended.actions';

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
