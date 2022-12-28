import { TestBed } from '@angular/core/testing';

import { CtfTeamService } from '../ctf-team.service';

describe('CtfTeamService', () => {
  let service: CtfTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
