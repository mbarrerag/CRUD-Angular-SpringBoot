import { TestBed } from '@angular/core/testing';

import { GetAllPersonasService } from './get-all-personas.service';

describe('GetAllPersonasService', () => {
  let service: GetAllPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
