import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news-feed',
    loadChildren: () => import('./pages/news-feed/news-feed.module').then( m => m.NewsFeedPageModule)
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./pages/notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'task-list',
    loadChildren: () => import('./pages/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./pages/task-detail/task-detail.module').then( m => m.TaskDetailPageModule)
  },
  {
    path: 'task-add',
    loadChildren: () => import('./pages/task-add/task-add.module').then( m => m.TaskAddPageModule)
  },
  {
    path: 'notification-add',
    loadChildren: () => import('./pages/notification-add/notification-add.module').then( m => m.NotificationAddPageModule)
  },
  {
    path: 'news-add',
    loadChildren: () => import('./pages/news-add/news-add.module').then( m => m.NewsAddPageModule)
  },  {
    path: 'news-detail',
    loadChildren: () => import('./pages/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
