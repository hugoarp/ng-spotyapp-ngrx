import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/core/services/interfaces/recommendations';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listOfTracks: Track[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getRecommendations();
  }

  getRecommendations() {
    this.spotifyService.getRecommendations().subscribe((res) => {
      this.listOfTracks = res.tracks;
    });
  }
}
