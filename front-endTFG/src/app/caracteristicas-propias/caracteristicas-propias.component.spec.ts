import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasPropiasComponent } from './caracteristicas-propias.component';

describe('CaracteristicasPropiasComponent', () => {
  let component: CaracteristicasPropiasComponent;
  let fixture: ComponentFixture<CaracteristicasPropiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasPropiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasPropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
