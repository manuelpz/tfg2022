import { TestBed } from '@angular/core/testing';

import { ParamFiltrosPantallasService } from './param-filtros-pantallas.service';

describe('ParamFiltrosPantallasService', () => {
  let service: ParamFiltrosPantallasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamFiltrosPantallasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
