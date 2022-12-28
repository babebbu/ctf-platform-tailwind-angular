import { Injectable } from '@angular/core';
import {CtfEvent} from "../../../core/interfaces/ctf-event";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventStateService {

  public event: ReplaySubject<CtfEvent>

  constructor() {
    this.event = new ReplaySubject<CtfEvent>()
  }

}
