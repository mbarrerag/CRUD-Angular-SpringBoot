import { TestBed } from '@angular/core/testing';

import { DeleteVehiculoService } from './delete-vehiculo.service';

describe('DeleteVehiculoService', () => {
  let service: DeleteVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
