import {ElementRef, EventEmitter, Injectable, ViewContainerRef} from "@angular/core";

export interface Modal {
  container: ElementRef
  viewContainerRef: ViewContainerRef
  closeEvent?: EventEmitter<any>
  close(): void
}
