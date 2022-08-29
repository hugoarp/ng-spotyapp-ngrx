import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getAccessToken();
  }

  getAccessToken() {
    this.activatedRoute.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment!)),
        map((params) => params.get('access_token'))
      )
      .subscribe((token) => {
        this.authorizeAccess(token);
      });
  }

  authorizeAccess(token: string | null) {
    if (token) {
      sessionStorage.setItem('token', token);
      this.router.navigate(['home']);

      return;
    }

    this.router.navigate(['login']);
  }
}
