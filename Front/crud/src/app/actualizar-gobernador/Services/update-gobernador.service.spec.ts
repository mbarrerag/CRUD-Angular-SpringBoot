import { TestBed } from '@angular/core/testing';

import { UpdateGobernadorService } from './update-gobernador.service';

describe('UpdateGobernadorService', () => {
  let service: UpdateGobernadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateGobernadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
