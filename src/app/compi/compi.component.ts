import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compi',
  templateUrl: './compi.component.html',
  styleUrls: ['./compi.component.css']
})
export class CompiComponent implements OnInit {

  @Input() title: any;
  @Input() servicios!: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
