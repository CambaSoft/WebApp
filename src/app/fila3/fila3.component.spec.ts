import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fila3Component } from './fila3.component';

describe('Fila3Component', () => {
  let component: Fila3Component;
  let fixture: ComponentFixture<Fila3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fila3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fila3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
