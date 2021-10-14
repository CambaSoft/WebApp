import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Si2Component } from './si2.component';

describe('Si2Component', () => {
  let component: Si2Component;
  let fixture: ComponentFixture<Si2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Si2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Si2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
