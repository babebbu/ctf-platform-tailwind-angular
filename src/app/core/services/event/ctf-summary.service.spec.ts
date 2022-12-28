import { TestBed } from '@angular/core/testing';

import { CtfSummaryService } from './ctf-summary.service';

describe('CtfSummaryService', () => {
  let service: CtfSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
