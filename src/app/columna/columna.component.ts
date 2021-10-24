import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.css']
})
export class ColumnaComponent implements OnInit {
  @Input() type!: boolean;
  @Input() title: any;
  @Input() servicios!: Array<string>;
  @Input() imageUrl!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
