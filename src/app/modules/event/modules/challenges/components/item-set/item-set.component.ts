import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item-set',
  templateUrl: './item-set.component.html',
  styleUrls: ['./item-set.component.scss']
})
export class ItemSetComponent {

  @Input()
  itemSet: any

  constructor(
  ) { }

}
