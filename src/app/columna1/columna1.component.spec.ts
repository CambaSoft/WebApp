import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Columna1Component } from './columna1.component';

describe('Columna1Component', () => {
  let component: Columna1Component;
  let fixture: ComponentFixture<Columna1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Columna1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Columna1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
