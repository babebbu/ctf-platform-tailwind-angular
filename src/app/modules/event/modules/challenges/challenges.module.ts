import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharesModule} from "../../../../shares/shares.module";
import {ItemSetComponent} from "./components/item-set/item-set.component";
import { ChallengeDetailsComponent } from './components/challenge-details/challenge-details.component';
import {MarkdownModule} from "ngx-markdown";
import { ChallengeDetailsDialogComponent } from './components/challenge-details-dialog/challenge-details-dialog.component';
import {DialogModule} from "@angular/cdk/dialog";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ChallengesComponent,
    ItemSetComponent,
    ChallengeDetailsComponent,
    ChallengeDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    SharesModule,
    FontAwesomeModule,
    MarkdownModule,
    DialogModule,
    MatDialogModule
  ],
  exports: [
    ItemSetComponent
  ]
})
export class ChallengesModule { }
