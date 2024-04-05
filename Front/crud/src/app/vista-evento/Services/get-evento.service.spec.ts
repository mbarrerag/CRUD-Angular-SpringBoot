import { TestBed } from '@angular/core/testing';

import { GetEventoService } from './get-evento.service';

describe('GetEventoService', () => {
  let service: GetEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
