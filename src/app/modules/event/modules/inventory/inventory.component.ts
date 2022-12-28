import {Component, OnInit} from '@angular/core';
import {CtfEventService} from "../../../../core/services/event/ctf-event.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items: any[] = [
    {
      group: 'Inventory',
      items: []
    }
  ]

  constructor(private ctfEventService: CtfEventService) {
  }

  ngOnInit(): void {
  }



}
