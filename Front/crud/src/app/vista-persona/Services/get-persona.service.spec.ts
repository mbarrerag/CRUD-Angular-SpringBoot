import { TestBed } from '@angular/core/testing';

import { GetPersonaService } from './get-persona.service';

describe('GetPersonaService', () => {
  let service: GetPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
