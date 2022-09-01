import { Component, OnInit } from '@angular/core';
import { TrackInfo } from 'src/app/core/services/interfaces/track';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tracks: TrackInfo[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getRecommendations();
  }

  getRecommendations() {
    this.spotifyService.getRecommendations().subscribe((res) => {
      this.tracks = res;
    });
  }

  saveFavoriteTrack(id: string) {
    this.spotifyService.saveFavoriteTrack(id).subscribe();
  }
}
