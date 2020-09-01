import { TestBed } from '@angular/core/testing';

import { BuscadorIbgeServiceService } from './buscador-ibge-service.service';

describe('BuscadorIbgeServiceService', () => {
  let service: BuscadorIbgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorIbgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
