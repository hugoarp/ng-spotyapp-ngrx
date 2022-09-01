import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-icon',
  templateUrl: './g-icon.component.html',
  styleUrls: ['./g-icon.component.scss'],
})
export class GIconComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
