import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compi',
  templateUrl: './compi.component.html',
  styleUrls: ['./compi.component.css']
})
export class CompiComponent implements OnInit {

  @Input() title: any;
  servicios=[
    "Codigo-3, Diagrama de Transición, BNF, Conjuntos First, Parser",
    "Proyectos",
    "Preparación para Exámenes"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
