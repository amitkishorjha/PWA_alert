import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {
  current_notification:any
  constructor(private router:Router,private loginservice:LoginService
    
  ) { }

  ngOnInit() {
    this.current_notification = this.loginservice.currnotification;
  }

}
