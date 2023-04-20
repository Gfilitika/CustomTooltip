import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomTooltip';
  tooltip: string = '';
  left: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
