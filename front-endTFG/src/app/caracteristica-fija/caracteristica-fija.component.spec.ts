import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaFijaComponent } from './caracteristica-fija.component';

describe('CaracteristicaFijaComponent', () => {
  let component: CaracteristicaFijaComponent;
  let fixture: ComponentFixture<CaracteristicaFijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaFijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
