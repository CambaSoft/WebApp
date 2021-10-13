import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fila4Component } from './fila4.component';

describe('Fila4Component', () => {
  let component: Fila4Component;
  let fixture: ComponentFixture<Fila4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fila4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fila4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
