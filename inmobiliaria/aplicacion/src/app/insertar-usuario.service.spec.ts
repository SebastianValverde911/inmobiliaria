import { TestBed } from '@angular/core/testing';

import { InsertarUsuarioService } from './insertar-usuario.service';

describe('InsertarUsuarioService', () => {
  let service: InsertarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
