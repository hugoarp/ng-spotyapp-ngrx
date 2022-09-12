import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/core/interfaces/button';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() buttonInfo: Button = {
    icon: '',
    label: '',
    route: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
