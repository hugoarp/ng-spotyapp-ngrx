import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-b',
  templateUrl: './text-b.component.html',
  styleUrls: ['./text-b.component.scss'],
})
export class TextBComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
