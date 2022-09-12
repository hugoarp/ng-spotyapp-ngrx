import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss'],
})
export class GreenButtonComponent implements OnInit {
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
