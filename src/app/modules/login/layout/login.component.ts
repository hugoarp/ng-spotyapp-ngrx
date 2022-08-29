import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authorize: string = `https://accounts.spotify.com/authorize?client_id=${environment.clientID}&response_type=token&redirect_uri=http://localhost:4200/login/auth/`;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  goToAuthorize() {
    window.location.href = this.authorize;
  }
}
