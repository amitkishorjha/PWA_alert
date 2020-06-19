import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastController , LoadingController  } from '@ionic/angular';
import { filter } from '../../Models/filter';
import { Storage } from '@ionic/storage';
declare var window;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})

export class NotificationsPage implements OnInit {
  notifData: any;
  filter :filter = {searchtext:'',filterby:''};
  public curruserid:string;
  constructor(private router:Router,private loginservice:LoginService,private toastcontroller:ToastController,public loadingController:LoadingController,
  private storage: Storage,) {
    window.getnotifications;
   }

  ngOnInit() {
    
    this.storage.get('customer').then((val) => {
      if(val)
      {
        this.curruserid = val[0].id;
        this.getNotifications();
      }
    });

  }

 async getNotifications()
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    loading.present();
    console.log('yes');
  
    this.loginservice.getNotifications(this.curruserid).subscribe(
      data => {

        console.log(data);
        this.notifData = data;
        loading.dismiss();
      });
  }

  goToNotif(notif) {
    this.loginservice.currnotification = notif;
    this.router.navigate(['/notification-detail']);
  }

  AddNotification()
  {
    this.router.navigate(['/notification-add']);
  }

  async notifSearch()
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    loading.present();

    this.loginservice.filterNotifiction(this.filter).subscribe(
      data => {
        console.log(data);
        this.notifData = data;
        loading.dismiss();
      });
  }

}
