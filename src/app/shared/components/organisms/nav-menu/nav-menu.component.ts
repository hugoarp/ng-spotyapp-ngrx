import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'src/app/core/interfaces/button';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menuItems: Button[] = [];
  navbarLogo: string = './assets/img/spotify-logo.svg';

  constructor() {}

  ngOnInit(): void {}
}
