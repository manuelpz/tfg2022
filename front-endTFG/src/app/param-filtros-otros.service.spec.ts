import { TestBed } from '@angular/core/testing';

import { ParamFiltrosOtrosService } from './param-filtros-otros.service';

describe('ParamFiltrosOtrosService', () => {
  let service: ParamFiltrosOtrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamFiltrosOtrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
