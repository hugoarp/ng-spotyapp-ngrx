import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectUser } from 'src/app/core/store/user/user.selectors';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() menuItems: any[] = [];
  currentUser$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(selectUser);
  }
}
