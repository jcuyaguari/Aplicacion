import { TestBed } from '@angular/core/testing';

import { BancarestService } from './bancarest.service';

describe('BancarestService', () => {
  let service: BancarestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancarestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
