import { TestBed } from '@angular/core/testing';

import { PlatformChallengesService } from '../platform-challenges.service';

describe('PlatformChallengesService', () => {
  let service: PlatformChallengesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformChallengesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
