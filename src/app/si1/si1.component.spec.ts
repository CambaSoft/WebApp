import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Si1Component } from './si1.component';

describe('Si1Component', () => {
  let component: Si1Component;
  let fixture: ComponentFixture<Si1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Si1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Si1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
