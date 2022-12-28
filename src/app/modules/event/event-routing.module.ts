import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from "./event.component";

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'challenges',
        loadChildren: () => import('./modules/challenges/challenges.module').then(m => m.ChallengesModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'summary',
        loadChildren: () => import('./modules/summary/summary.module').then(m => m.SummaryModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
