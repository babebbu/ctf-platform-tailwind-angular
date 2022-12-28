import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CtfEventService} from "../../../../../../core/services/event/ctf-event.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChallengeDetailsComponent implements OnInit {

  @Input() id?: any

  @Output() closed = new EventEmitter<any>()

  title?: string

  content?: string

  constructor(private ctfEventService: CtfEventService) {
  }

  ngOnInit(): void {
    this.ctfEventService.challenges().get(this.id).subscribe(res => {
      this.title = res.title
      this.content = res.content
    })
  }

}
