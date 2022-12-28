import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
import { ModalBgTransparentComponent } from './modal-bg-transparent/modal-bg-transparent.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { AbstractModalComponent } from './abstract-modal/abstract-modal.component';
import { ModalCardComponent } from './modal-card/modal-card.component';
import {MarkdownModule} from "ngx-markdown";



@NgModule({
  declarations: [
    ModalDirective,
    ModalBgTransparentComponent,
    ModalBasicComponent,
    AbstractModalComponent,
    ModalCardComponent
  ],
  exports: [
    ModalDirective,
    ModalBgTransparentComponent,
    ModalBasicComponent
  ],
    imports: [
        CommonModule,
        MarkdownModule
    ]
})
export class ModalModule { }
