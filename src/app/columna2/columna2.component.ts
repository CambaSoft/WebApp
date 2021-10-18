import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna2',
  templateUrl: './columna2.component.html',
  styleUrls: ['./columna2.component.css']
})
export class Columna2Component implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<string>;
  @Input() imageUrl!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
