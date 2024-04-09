import { TestBed } from '@angular/core/testing';

import { GetAllViviendasService } from './get-all-viviendas.service';

describe('GetAllViviendasService', () => {
  let service: GetAllViviendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllViviendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
