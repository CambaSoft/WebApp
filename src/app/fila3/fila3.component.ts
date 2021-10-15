import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila3',
  templateUrl: './fila3.component.html',
  styleUrls: ['./fila3.component.css'],
})
export class Fila3Component implements OnInit {
  si = [
    'Codigo-3, Diagrama de Transición, BNF, Conjuntos First, Parser',
    'Proyectos',
    'Preparación para Exámenes',
  ];
  compi = ['Proyecto (Laravel)', 'Documentación'];
  constructor() {}

  ngOnInit(): void {}
}
