import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/core/services/interfaces/user';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  @Input() currentUser!: UserInfo;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
  }


}
