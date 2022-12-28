import { TestBed } from '@angular/core/testing';

import { CtfInventoryService } from '../ctf-inventory.service';

describe('CtfInventoryService', () => {
  let service: CtfInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
