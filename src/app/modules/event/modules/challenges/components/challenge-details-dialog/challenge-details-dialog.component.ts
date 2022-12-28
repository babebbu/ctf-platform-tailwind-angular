import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-challenge-details-dialog',
  templateUrl: './challenge-details-dialog.component.html',
  styleUrls: ['./challenge-details-dialog.component.scss']
})
export class ChallengeDetailsDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title?: string, content?: string }
  ) { }

  close() {

  }
}
