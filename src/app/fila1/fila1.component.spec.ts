import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fila1Component } from './fila1.component';

describe('Fila1Component', () => {
  let component: Fila1Component;
  let fixture: ComponentFixture<Fila1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fila1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fila1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
