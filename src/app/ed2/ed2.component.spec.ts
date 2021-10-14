import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ed2Component } from './ed2.component';

describe('Ed2Component', () => {
  let component: Ed2Component;
  let fixture: ComponentFixture<Ed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ed2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
