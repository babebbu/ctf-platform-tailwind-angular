import { TestBed } from '@angular/core/testing';

import { CtfChallengesService } from '../ctf-challenges.service';

describe('CtfChallengesService', () => {
  let service: CtfChallengesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfChallengesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
