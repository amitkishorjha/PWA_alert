import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NotificationsService } from '../app/notifications.service';
import { AngularFireMessaging } from '@angular/fire/messaging';
import Axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public isValid:boolean = false;
  public username: string;

  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'News Feeds',
      url: 'news-feed',
      icon: 'paper-plane'
    },
    {
      title: 'Message',
      url: 'chat-list',
      icon: 'heart'
    },
    {
      title: 'Calendar',
      url: 'calendar',
      icon: 'calendar'
    },
    {
      title: 'Taks',
      url: 'task-list',
      icon: 'receipt'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private notificationService: NotificationsService,
    private afMesg: AngularFireMessaging,
    private toastController: ToastController,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

    this.storage.get('customer').then((val) => {
      if(val)
      {
        this.username = val[0].Fname;
        this.isValid = true;
        this.router.navigate(['/home']);
      }
});
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  LogOut()
  {
    console.log('logout');
    
    this.isValid = false;
    this.username = "Not loggedIn";
    this.storage.remove("customer");
    this.storage.remove("aletseen");
    this.router.navigateByUrl('login');
  }


  async ngOnInit() {

  this.storage.get('customer').then((val) => {
      if(val)
      {
        this.username = val[0].Fname;
        this.isValid = true;
      }else
      {
        this.username = null;
        this.isValid = false;
      }
});


     const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
          this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        await this.notificationService.init();

        this.requestPermission();

   
  }

  showToast = async () => {
    const toast = await this.toastController.create({
      message: 'This is emergency message from John Doe',
      duration: 2000
    });
    toast.present();
  }

  sendAlert = () => {
    Axios.post('https://fcm.googleapis.com/fcm/send', {
      "message": {
        "notification": {
          "title": "Emergency Alert",
          "body": "This is an Emergency from John Doe"
        },
        "webpush": {
          "headers": {
            "Urgency": "high"
          },
          "notification": {
            "body": "This is an Emergency from John Doe",
            "requireInteraction": "true",
            "collapse_key": "key_1321"
          }
        }
      },
      "to": "/topics/all"
    }, { headers: { 'Authorization': 'key=AAAA2RYGQQo:APA91bGs0FgR3EDS54vFLgH5aP0ymXS4X8GM33Ys6sEqUqifck0PEm3nAT7ymvp4WlF932dbyjlk-bYj18GK-BsdYu55LRbLmSjy_3OubCrnz_EsRD_cpnjJCigKvnEasR6NRJgl9-Hg', 'Content-Type': 'application/json' } })
      .then((data) => { console.log(data.data) })
      .catch((e) => { console.log(e) });
  }

  requestPermission() {
    this.afMesg.requestPermission.subscribe((data) => {
      console.log(data);
    }, (e) => {
      console.log(e);
    });
  }

  Login()
  {
    this.router.navigate(['/login']);
  }
}
