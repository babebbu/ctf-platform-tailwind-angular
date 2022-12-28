import {Component, ElementRef, EventEmitter, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDirective} from "../modal.directive";
import {Modal} from "../modal";

@Component({template: ``})
export class AbstractModalComponent implements Modal{

  @ViewChild('container', {static: true}) private modalContainer!: ElementRef

  @ViewChild(ModalDirective, {static: true}) private modalDirective!: ModalDirective

  get container(): ElementRef {
    return this.modalContainer
  }

  get viewContainerRef(): ViewContainerRef {
    return this.modalDirective.viewContainerRef
  }

  closeEvent?: EventEmitter<any>

  close() {
    this.container.nativeElement.classList.add('hidden')
    this.viewContainerRef.clear()
    this.closeEvent?.emit('close')
    this.closeEvent = undefined
  }

}
