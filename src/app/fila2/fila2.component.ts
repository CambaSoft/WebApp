import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila2',
  templateUrl: './fila2.component.html',
  styleUrls: ['./fila2.component.css'],
})
export class Fila2Component implements OnInit {
  ed2 = ['Arboles, Grafos, Generics', 'Proyectos', 'Preparación para Exámenes'];
  ensamblador = [
    'Registros, Memoria, Operaciones',
    'Preparación para Exámenes',
  ];
  constructor() {}

  ngOnInit(): void {}
}
