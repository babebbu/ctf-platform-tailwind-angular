import {
  EventEmitter,
  Injectable,
} from '@angular/core';
import {Modal} from "./modal";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal?: Modal

  // @ts-ignore
  constructor() {}

  async open(modal: Modal, component: any, data?: object) {
    const container: HTMLElement = modal.container.nativeElement
    container.classList.remove('hidden')
    const componentRef = modal.viewContainerRef.createComponent(component)
    // @ts-ignore
    Object.assign(componentRef.instance, data)
    modal.closeEvent = new EventEmitter<any>()
    this.modal = modal
  }

  close() {
    this.modal?.close()
  }

}
