import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program2',
  templateUrl: './program2.component.html',
  styleUrls: ['./program2.component.css']
})
export class Program2Component implements OnInit {
  @Input() title: any;
  servicios=[
     "Recursion, Diagramas de Clases",
      "Proyecto",
      "Preparación para Exámenes"
  ];
  constructor() {
  }
  ngOnInit(): void {
  }

}
