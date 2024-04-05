import { TestBed } from '@angular/core/testing';

import { UpdateViviendaService } from './update-vivienda.service';

describe('UpdateViviendaService', () => {
  let service: UpdateViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
