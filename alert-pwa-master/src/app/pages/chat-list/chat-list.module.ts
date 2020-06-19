import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatListPageRoutingModule } from './chat-list-routing.module';

import { ChatListPage } from './chat-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChatListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatListPage]
})
export class ChatListPageModule {}
