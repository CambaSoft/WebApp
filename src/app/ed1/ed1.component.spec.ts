import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ed1Component } from './ed1.component';

describe('Ed1Component', () => {
  let component: Ed1Component;
  let fixture: ComponentFixture<Ed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ed1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
