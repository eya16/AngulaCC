import { TestBed } from '@angular/core/testing';

import { ChercherService } from './chercher.service';

describe('ChercherService', () => {
  let service: ChercherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChercherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
