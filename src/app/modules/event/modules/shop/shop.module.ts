import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {SharesModule} from "../../../../shares/shares.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ShopComponent
  ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        SharesModule,
        FontAwesomeModule
    ]
})
export class ShopModule { }
