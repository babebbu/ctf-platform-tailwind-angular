import {Component, OnInit} from '@angular/core';
import {CtfEventService} from "../../../../core/services/event/ctf-event.service";
import {ActivatedRoute} from "@angular/router";
import {ModalService} from "../../../../shares/modal2/modal.service";
import {TestComponent} from "../../../../shares/test/test.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items?: any[]

  id: any

  constructor(
    private ctfEventService: CtfEventService,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.ctfEventService.shop().list().subscribe(items => this.items = items)
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id']
        console.log(params)
        this.showModal()
      }
    })
  }

  showModal() {
    this.modalService.show(TestComponent, {
      title: 'กล่องสุ่ม'
    })
  }

}
