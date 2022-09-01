import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/services/interfaces/favorites';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  listOfFavorites: Item[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getUserFavorites();
  }

  getUserFavorites() {
    this.spotifyService.getUserFavorites().subscribe((res) => {
      this.listOfFavorites = res.items;
      console.log(this.listOfFavorites);
    });
  }
}
