import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna1',
  templateUrl: './columna1.component.html',
  styleUrls: ['./columna1.component.css']
})
export class Columna1Component implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<string>;
  @Input() imageUrl!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
