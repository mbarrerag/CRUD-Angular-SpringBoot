import { TestBed } from '@angular/core/testing';

import { GetViviendaService } from './get-vivienda.service';

describe('GetViviendaService', () => {
  let service: GetViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
