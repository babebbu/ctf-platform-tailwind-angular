import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {EventStateService} from "./services/event-state.service";
import {PlatformService} from "../../core/services/platform/platform.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private eventStateService: EventStateService,
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

    })
  }

}
