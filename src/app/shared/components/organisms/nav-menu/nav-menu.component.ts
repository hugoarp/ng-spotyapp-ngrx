import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/core/services/interfaces/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  @Input() user!: UserInfo;

  constructor() {}

  ngOnInit(): void {}
}
