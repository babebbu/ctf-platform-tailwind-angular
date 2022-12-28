import {Component} from '@angular/core';
import {Modal} from "../modal";
import {AbstractModalComponent} from "../abstract-modal/abstract-modal.component";

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss']
})
export class ModalBasicComponent extends AbstractModalComponent implements Modal {
}
