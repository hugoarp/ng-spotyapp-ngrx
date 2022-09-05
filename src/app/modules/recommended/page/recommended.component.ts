import { Component, OnInit } from '@angular/core';
import { TrackInfo } from 'src/app/core/services/interfaces/track';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
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
}
