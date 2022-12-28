import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemCardComponent} from "./item-card/item-card.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TestComponent } from './test/test.component';
import {MarkdownModule} from "ngx-markdown";
import { ModalContainerComponent } from './modal/modal-container/modal-container.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ItemCardComponent,
    TestComponent,
    ModalContainerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MarkdownModule.forChild(),
    RouterLink
  ],
  exports: [
    ItemCardComponent,
    TestComponent,
    ModalContainerComponent,
  ]
})
export class SharesModule { }
