import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationAddPageRoutingModule } from './notification-add-routing.module';

import { NotificationAddPage } from './notification-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationAddPageRoutingModule
  ],
  declarations: [NotificationAddPage]
})
export class NotificationAddPageModule {}
