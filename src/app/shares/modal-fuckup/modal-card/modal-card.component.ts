import { Component } from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {

  title?: string

  content: any;

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.close()
  }
}
