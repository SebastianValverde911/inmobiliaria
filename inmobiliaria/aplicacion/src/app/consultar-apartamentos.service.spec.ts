import { TestBed } from '@angular/core/testing';

import { ConsultarApartamentosService } from './consultar-apartamentos.service';

describe('ConsultarApartamentosService', () => {
  let service: ConsultarApartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarApartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
