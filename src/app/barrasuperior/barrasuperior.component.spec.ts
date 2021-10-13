import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasuperiorComponent } from './barrasuperior.component';

describe('BarrasuperiorComponent', () => {
  let component: BarrasuperiorComponent;
  let fixture: ComponentFixture<BarrasuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
