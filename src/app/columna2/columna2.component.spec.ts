import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Columna2Component } from './columna2.component';

describe('Columna2Component', () => {
  let component: Columna2Component;
  let fixture: ComponentFixture<Columna2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Columna2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Columna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
