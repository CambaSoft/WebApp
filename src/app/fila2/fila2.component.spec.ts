import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fila2Component } from './fila2.component';

describe('Fila2Component', () => {
  let component: Fila2Component;
  let fixture: ComponentFixture<Fila2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fila2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fila2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
