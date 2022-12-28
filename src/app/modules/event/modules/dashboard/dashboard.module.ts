import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnnouncementsComponent,
    ActivityFeedComponent,
    TimelineComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
