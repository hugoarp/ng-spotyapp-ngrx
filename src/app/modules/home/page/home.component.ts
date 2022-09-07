import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrackInfo } from 'src/app/core/interfaces/track';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store/app.state';
import { selectUser } from 'src/app/core/store/user/user.selectors';
import { loadUserDetails } from 'src/app/core/store/user/user.actions';

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
