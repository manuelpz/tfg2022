import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaTarjetaComponent } from './caracteristica-tarjeta.component';

describe('CaracteristicaTarjetaComponent', () => {
  let component: CaracteristicaTarjetaComponent;
  let fixture: ComponentFixture<CaracteristicaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
