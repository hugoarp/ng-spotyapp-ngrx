import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
})
export class TrackCardComponent implements OnInit {
  @Input() cover: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() {}

  ngOnInit(): void {}
}
