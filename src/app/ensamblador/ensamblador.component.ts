import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensamblador',
  templateUrl: './ensamblador.component.html',
  styleUrls: ['./ensamblador.component.css'],
})
export class EnsambladorComponent implements OnInit {
  @Input() title: any;
  @Input() servicios!: Array<any>;
  constructor() {}

  ngOnInit(): void {}
}
