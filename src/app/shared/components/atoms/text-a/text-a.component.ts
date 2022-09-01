import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-a',
  templateUrl: './text-a.component.html',
  styleUrls: ['./text-a.component.scss']
})
export class TextAComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
