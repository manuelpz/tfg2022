import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractFijasComponent } from './caract-fijas.component';

describe('CaractFijasComponent', () => {
  let component: CaractFijasComponent;
  let fixture: ComponentFixture<CaractFijasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractFijasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractFijasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
