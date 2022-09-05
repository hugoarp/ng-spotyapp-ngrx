import { Component, OnInit, Input } from '@angular/core';
import { TrackInfo } from 'src/app/core/services/interfaces/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: TrackInfo[] = [];
  @Input() listTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent(event: any) {
    console.log(event);
  }
}
