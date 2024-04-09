import { TestBed } from '@angular/core/testing';

import { GetAllEventosService } from './get-all-eventos.service';

describe('GetAllEventosService', () => {
  let service: GetAllEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
