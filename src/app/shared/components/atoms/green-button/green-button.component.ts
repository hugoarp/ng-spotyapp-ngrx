import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss'],
})
export class GreenButtonComponent implements OnInit {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.onClick.emit();
  }
}
