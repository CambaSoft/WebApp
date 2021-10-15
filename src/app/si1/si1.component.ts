import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-si1',
  templateUrl: './si1.component.html',
  styleUrls: ['./si1.component.css']
})
export class Si1Component implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }
}
