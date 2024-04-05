import { TestBed } from '@angular/core/testing';

import { UpdateVehiculoService } from './update-vehiculo.service';

describe('UpdateVehiculoService', () => {
  let service: UpdateVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
