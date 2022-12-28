import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { EventHeaderComponent } from './components/event-header/event-header.component';


@NgModule({
  declarations: [
    EventComponent,
    EventHeaderComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FontAwesomeModule
  ]
})
export class EventModule { }
