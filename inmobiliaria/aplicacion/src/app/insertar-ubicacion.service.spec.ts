import { TestBed } from '@angular/core/testing';

import { InsertarUbicacionService } from './insertar-ubicacion.service';

describe('InsertarUbicacionService', () => {
  let service: InsertarUbicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarUbicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
