import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TrackInfo } from 'src/app/core/interfaces/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: TrackInfo[] = [];
  @Input() listTitle: string = '';

  @Output() favoriteEvent = new EventEmitter<TrackInfo>();

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent(event: TrackInfo) {
    this.favoriteEvent.emit(event);
  }
}
