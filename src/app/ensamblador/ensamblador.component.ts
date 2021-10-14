import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensamblador',
  templateUrl: './ensamblador.component.html',
  styleUrls: ['./ensamblador.component.css']
})
export class EnsambladorComponent implements OnInit {
  @Input() title: any;
  servicios=[
    "Registros, Memoria, Operaciones",
    "Preparación para Exámenes"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
