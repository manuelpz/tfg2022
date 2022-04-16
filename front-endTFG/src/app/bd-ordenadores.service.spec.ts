import { TestBed } from '@angular/core/testing';

import { BdOrdenadoresService } from './bd-ordenadores.service';

describe('BdOrdenadoresService', () => {
  let service: BdOrdenadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdOrdenadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
