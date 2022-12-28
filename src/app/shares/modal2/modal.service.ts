import {ComponentFactoryResolver, Injectable, Injector, ViewContainerRef} from '@angular/core';
import {ModalBackdropComponent} from "./modal-backdrop/modal-backdrop.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  show(component: any, props?: object) {
    const backdropComponentRef = this.componentFactoryResolver.resolveComponentFactory(ModalBackdropComponent).create(this.injector)
    const contentComponentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector)
    contentComponentRef.setInput('title', 'กล่องสุ่ม 1')

    console.log(contentComponentRef.location.nativeElement)

    const app = document.querySelector('app-root') as Element
    app.appendChild(backdropComponentRef.location.nativeElement)


    const container = document.querySelector('app-modal-backdrop > div > div') as Element
    container.appendChild(contentComponentRef.location.nativeElement)
  }

  hide() {

  }
}
