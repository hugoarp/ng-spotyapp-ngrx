import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss'],
})
export class UserButtonComponent implements OnInit {
  @Input() user!: UserInfo;
  constructor() {}

  ngOnInit(): void {}
}
