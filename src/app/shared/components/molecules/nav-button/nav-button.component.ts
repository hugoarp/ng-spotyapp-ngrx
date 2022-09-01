import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() avatar: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  prueba() {
    console.log('Jelouda');
    
  }

}
