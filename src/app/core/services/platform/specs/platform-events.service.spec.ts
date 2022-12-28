import { TestBed } from '@angular/core/testing';

import { PlatformEventsService } from '../platform-events.service';

describe('PlatformEventsService', () => {
  let service: PlatformEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
