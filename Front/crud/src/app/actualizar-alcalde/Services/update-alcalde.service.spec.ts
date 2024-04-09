import { TestBed } from '@angular/core/testing';

import { UpdateAlcaldeService } from './update-alcalde.service';

describe('UpdateAlcaldeService', () => {
  let service: UpdateAlcaldeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateAlcaldeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
