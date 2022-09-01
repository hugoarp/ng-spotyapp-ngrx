import { Component, OnInit, Input } from '@angular/core';
import { UserResponse } from 'src/app/core/services/interfaces/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
