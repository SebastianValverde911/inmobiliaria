import { TestBed } from '@angular/core/testing';

import { ConsultarCasasService } from './consultar-casas.service';

describe('ConsultarCasasService', () => {
  let service: ConsultarCasasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarCasasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
