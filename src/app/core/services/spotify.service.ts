import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecommendationsResponse } from './interfaces/recommendations';
import { FavoritesResponse } from './interfaces/favorites';
import { UserResponse } from './interfaces/user';
import { map, Observable } from 'rxjs';
import { TrackInfo } from './interfaces/track';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getCurrentUser() {
    return this.http.get<UserResponse>(`${environment.url}/me`).pipe(
      map((user) => ({
        name: user.display_name,
        image: user.images[0].url,
      }))
    );
  }

  getRecommendations(): Observable<TrackInfo[]> {
    return this.http
      .get<RecommendationsResponse>(
        `${environment.url}/recommendations?limit=10&market=ES&seed_genres=rock`
      )
      .pipe(
        map(({ tracks }) =>
          tracks.map((track) => ({
            cover: track.album.images[0].url,
            title: track.name,
            description: track.artists[0].name,
            id: track.id,
          }))
        )
      );
  }

  getUserFavorites(): Observable<TrackInfo[]> {
    return this.http
      .get<FavoritesResponse>(`${environment.url}/me/tracks`)
      .pipe(
        map(({ items }) =>
          items
            .map((item) => item.track)
            .map((track) => ({
              cover: track.album.images[0].url,
              title: track.name,
              description: track.artists[0].name,
              id: track.id,
            }))
        )
      );
  }

  saveFavoriteTrack(trackId: string) {
    return this.http.put(`${environment.url}/me/tracks?ids=${trackId}`, {});
  }

  deleteFavoriteTrack(trackId: string) {
    return this.http.delete(`${environment.url}/me/tracks?ids=${trackId}`);
  }
}
