import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authorize: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.authorize = `https://accounts.spotify.com/authorize?client_id=${environment.clientID}${environment.authParams}`;
  }

  ngOnInit(): void {
    this.getAccessToken();
  }

  goToAuthorize() {
    window.location.href = this.authorize;
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
