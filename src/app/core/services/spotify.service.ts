import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecommendationsResponse } from './interfaces/recommendations';
import { FavoritesResponse } from './interfaces/favorites';
import { UserResponse } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  accessToken: string = '';

  constructor(private http: HttpClient) {}

  getCurrentUser() {
    return this.http.get<UserResponse>(`${environment.url}/me`);
  }

  getRecommendations() {
    return this.http.get<RecommendationsResponse>(
      `${environment.url}/recommendations?limit=10&market=ES&seed_genres=rock`
    );
  }

  getUserFavorites() {
    return this.http.get<FavoritesResponse>(`${environment.url}/me/tracks`);
  }
}
