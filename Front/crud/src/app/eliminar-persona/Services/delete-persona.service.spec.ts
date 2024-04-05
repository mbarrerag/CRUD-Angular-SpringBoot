import { TestBed } from '@angular/core/testing';

import { DeletePersonaService } from './delete-persona.service';

describe('DeletePersonaService', () => {
  let service: DeletePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
