import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationAddPage } from './notification-add.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationAddPageRoutingModule {}
