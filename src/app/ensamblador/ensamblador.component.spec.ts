import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsambladorComponent } from './ensamblador.component';

describe('EnsambladorComponent', () => {
  let component: EnsambladorComponent;
  let fixture: ComponentFixture<EnsambladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsambladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsambladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
