import { TestBed } from '@angular/core/testing';

import { InsertarInmuebleService } from './insertar-inmueble.service';

describe('InsertarInmuebleService', () => {
  let service: InsertarInmuebleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarInmuebleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
