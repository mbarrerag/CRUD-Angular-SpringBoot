import { TestBed } from '@angular/core/testing';

import { GetVehiculoService } from './get-vehiculo.service';

describe('GetVehiculoService', () => {
  let service: GetVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
