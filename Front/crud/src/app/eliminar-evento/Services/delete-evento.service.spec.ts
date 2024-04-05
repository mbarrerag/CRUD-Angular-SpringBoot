import { TestBed } from '@angular/core/testing';

import { DeleteEventoService } from './delete-evento.service';

describe('DeleteEventoService', () => {
  let service: DeleteEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
