import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss'],
})
export class UserButtonComponent implements OnInit {
  @Input() user: UserInfo = {
    name: '',
    image: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
