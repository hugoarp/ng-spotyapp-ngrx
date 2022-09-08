import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrackInfo } from 'src/app/core/interfaces/track';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss'],
})
export class TrackDetailsComponent implements OnInit {
  @Input() track: TrackInfo = {
    cover: '',
    title: '',
    description: '',
    id: '',
    favorite: false,
  };
  @Output() favoriteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent() {
    this.favoriteEvent.emit(this.track);
  }
}
