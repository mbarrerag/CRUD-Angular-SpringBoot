import { TestBed } from '@angular/core/testing';

import { GetVehiculoPlacaService } from './get-vehiculo-placa.service';

describe('GetVehiculoPlacaService', () => {
  let service: GetVehiculoPlacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVehiculoPlacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
