import { Injectable } from '@angular/core';
import {PlatformEventsService} from "./platform-events.service";
import {PlatformChallengesService} from "./platform-challenges.service";

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private eventsService: PlatformEventsService,
    private challengesService: PlatformChallengesService
  ) { }

  event() {
    return this.eventsService
  }

  challenges() {
    return this.challengesService
  }
}
