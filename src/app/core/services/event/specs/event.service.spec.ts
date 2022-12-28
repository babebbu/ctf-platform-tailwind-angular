import { TestBed } from '@angular/core/testing';

import { CtfEventService } from '../ctf-event.service';

describe('EventService', () => {
  let service: CtfEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtfEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
