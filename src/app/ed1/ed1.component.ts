import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ed1',
  templateUrl: './ed1.component.html',
  styleUrls: ['./ed1.component.css']
})
export class Ed1Component implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
