import { TestBed } from '@angular/core/testing';

import { CaracteristicasPropiasService } from './service/caracteristicas-propias.service';

describe('CaracteristicasPropiasService', () => {
  let service: CaracteristicasPropiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaracteristicasPropiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
