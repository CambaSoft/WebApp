import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnowebComponent } from './tecnoweb.component';

describe('TecnowebComponent', () => {
  let component: TecnowebComponent;
  let fixture: ComponentFixture<TecnowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
