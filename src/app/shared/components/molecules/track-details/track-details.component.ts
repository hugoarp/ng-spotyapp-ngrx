import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrackInfo } from 'src/app/core/services/interfaces/track';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss'],
})
export class TrackDetailsComponent implements OnInit {
  @Input() track!: TrackInfo;
  @Output() favoriteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent() {
    this.favoriteEvent.emit(this.track.id);
  }
}
