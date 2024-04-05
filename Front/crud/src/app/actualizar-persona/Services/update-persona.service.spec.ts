import { TestBed } from '@angular/core/testing';

import { UpdatePersonaService } from './update-persona.service';

describe('UpdatePersonaService', () => {
  let service: UpdatePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
