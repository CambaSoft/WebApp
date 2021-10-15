import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ed2',
  templateUrl: './ed2.component.html',
  styleUrls: ['./ed2.component.css']
})
export class Ed2Component implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
