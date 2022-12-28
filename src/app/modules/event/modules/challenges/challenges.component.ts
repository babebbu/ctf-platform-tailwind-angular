import {Component, OnInit} from '@angular/core';
import {CtfEventService} from "../../../../core/services/event/ctf-event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeDetailsDialogComponent} from "./components/challenge-details-dialog/challenge-details-dialog.component";
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {

  items?: any[]

  challengeId?: any

  show: boolean = false

  constructor(
    private ctfEventService: CtfEventService,
    private route: ActivatedRoute,
    public router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ctfEventService.challenges().list().subscribe(challenges => this.items = challenges)
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.challengeId = params['id']
        this.openDialog()
        console.log(params)
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChallengeDetailsDialogComponent, {
      panelClass: ['mt-32'],
      data: {
        title: 'Hello',
        content: 'asdasdsd'
      }
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed')
      this.redirectToListing()
    })
  }

  redirectToListing() {
    this.router.navigate(['/csc/challenges']).then()
  }

  closeModal() {
    this.challengeId = undefined
    this.redirectToListing()
  }
}
