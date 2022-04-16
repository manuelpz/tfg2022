import { TestBed } from '@angular/core/testing';

import { ParamFiltrosOrdenadoresService } from './param-filtros-ordenadores.service';

describe('ParamFiltrosCochesService', () => {
  let service: ParamFiltrosOrdenadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamFiltrosOrdenadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
