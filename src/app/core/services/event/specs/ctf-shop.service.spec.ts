import { TestBed } from '@angular/core/testing';

import { CtfShopService } from '../ctf-shop.service';

describe('CtfShopService', () => {
  let service: CtfShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
