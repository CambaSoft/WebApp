import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html'
})
export class GoogleButtonComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.onClick.emit();
  }

}
