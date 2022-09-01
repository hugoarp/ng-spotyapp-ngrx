import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss'],
})
export class TrackDetailsComponent implements OnInit {
  @Input() cover: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
