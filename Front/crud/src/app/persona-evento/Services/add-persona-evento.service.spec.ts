import { TestBed } from '@angular/core/testing';

import { AddPersonaEventoService } from './add-persona-evento.service';

describe('AddPersonaEventoService', () => {
  let service: AddPersonaEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPersonaEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
