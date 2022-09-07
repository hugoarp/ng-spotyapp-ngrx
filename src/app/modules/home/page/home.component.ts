import { Component, OnInit } from '@angular/core';
import { AppState } from '@core/store/app.state';
import { Store } from '@ngrx/store';
import { TrackInfo } from 'src/app/core/interfaces/track';
import { loadUserDetails } from 'src/app/core/store/user/user.actions';
import { Observable } from 'rxjs';
import { selectUser } from '@core/store/user/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menuItems: any[] = [];
  tracks: TrackInfo[] = [];
  currentUser$: Observable<any> = this.store.select(selectUser);

  constructor(private store: Store<AppState>) {
    this.menuItems = [
      {
        icon: 'home',
        label: 'Inicio',
        route: 'recomendados',
      },
      {
        icon: 'favorite',
        label: 'Favoritos',
        route: 'favoritos',
      },
    ];
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.store.dispatch(loadUserDetails());
  }
}
