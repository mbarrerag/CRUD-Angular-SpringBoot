import { TestBed } from '@angular/core/testing';

import { UpdateEventoService } from './update-evento.service';

describe('UpdateEventoService', () => {
  let service: UpdateEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
