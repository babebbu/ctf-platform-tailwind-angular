import {Component, ElementRef, EventEmitter, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDirective} from "../modal.directive";
import {Modal} from "../modal";

@Component({
  selector: 'app-modal-bg-transparent',
  templateUrl: './modal-bg-transparent.component.html',
  styleUrls: ['./modal-bg-transparent.component.scss']
})
export class ModalBgTransparentComponent implements Modal {

  @ViewChild('container', {static: true}) private modalContainer!: ElementRef

  @ViewChild(ModalDirective, {static: true}) private modalDirective!: ModalDirective

  closeEvent?: EventEmitter<any>

  get container(): ElementRef {
    return this.modalContainer
  }

  get viewContainerRef(): ViewContainerRef {
    return this.modalDirective.viewContainerRef
  }

  close() {
    this.container.nativeElement.classList.add('hidden')
    this.viewContainerRef.clear()
    this.closeEvent?.emit('close')
    this.closeEvent = undefined
  }

}
