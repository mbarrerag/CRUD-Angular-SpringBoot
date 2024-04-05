import { TestBed } from '@angular/core/testing';

import { DeleteViviendaService } from './delete-vivienda.service';

describe('DeleteViviendaService', () => {
  let service: DeleteViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
