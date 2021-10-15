import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila1',
  templateUrl: './fila1.component.html',
  styleUrls: ['./fila1.component.css'],
})
export class Fila1Component implements OnInit {
  prog2 = [
    'Recursion, Diagramas de Clases',
    'Proyecto',
    'Preparación para Exámenes',
  ];
  ed1 = [
    'Bitwise, TDA, Listas, Colas, Pilas',
    'Proyecto',
    'Preparación para Exámenes',
  ];
  constructor() {}

  ngOnInit(): void {}
}
