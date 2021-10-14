import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnoweb',
  templateUrl: './tecnoweb.component.html',
  styleUrls: ['./tecnoweb.component.css']
})
export class TecnowebComponent implements OnInit {
  @Input() title: any;
  servicios=[
    "Proyectos"
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}