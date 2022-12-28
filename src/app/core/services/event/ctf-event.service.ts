import { Injectable } from '@angular/core';
import {CtfChallengesService} from "./ctf-challenges.service";
import {CtfShopService} from "./ctf-shop.service";
import {CtfInventoryService} from "./ctf-inventory.service";

@Injectable({
  providedIn: 'root'
})
export class CtfEventService {

  constructor(
    private challengesService: CtfChallengesService,
    private shopService: CtfShopService,
    private inventoryService: CtfInventoryService
  ) { }

  public challenges() {
    return this.challengesService
  }

  public shop() {
    return this.shopService
  }

  public inventory() {
    return this.inventoryService
  }

  public getCurrentEvent() {

  }

}
