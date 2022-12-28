import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('150ms', style({
          opacity: 0,
        }))
      ])
    ]),
    trigger('animate2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('1500ms', style({
          opacity: 0,
        }))
      ])
    ]),
  ]
})
export class ModalContainerComponent {

  @Input() open: boolean = false
  @Input() backdropDismissal: boolean = true

  @Output() closed = new EventEmitter<any>()

  close() {
    this.open = false
    if (this.backdropDismissal) {
      setTimeout(() => this.closed.emit(), 150)
    }
  }
}
