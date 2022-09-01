import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-img',
  templateUrl: './cover-img.component.html',
  styleUrls: ['./cover-img.component.scss'],
})
export class CoverImgComponent implements OnInit {
  @Input() cover: string = '';
  constructor() {}

  ngOnInit(): void {}
}
