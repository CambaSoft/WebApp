import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-si2',
  templateUrl: './si2.component.html',
  styleUrls: ['./si2.component.css']
})
export class Si2Component implements OnInit {
  @Input() title: any;
  servicios=[
    "Laravel (backend)",
    "Angular, React (frontend)"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
