import { TestBed } from '@angular/core/testing';

import { RegistrarEventoService } from './registrar-evento.service';

describe('RegistrarEventoService', () => {
  let service: RegistrarEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
