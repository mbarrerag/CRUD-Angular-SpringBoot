import { TestBed } from '@angular/core/testing';

import { RegistrarViviendaService } from './registrar-vivienda.service';

describe('RegistrarViviendaService', () => {
  let service: RegistrarViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
