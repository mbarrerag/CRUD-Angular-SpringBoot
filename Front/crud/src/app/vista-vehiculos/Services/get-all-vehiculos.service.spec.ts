import { TestBed } from '@angular/core/testing';

import { GetAllVehiculosService } from './get-all-vehiculos.service';

describe('GetAllVehiculosService', () => {
  let service: GetAllVehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllVehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
