import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { ToastController,AlertController,LoadingController,MenuController  } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import Axios from 'axios';
import {AppComponent} from '../../app.component';
declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // userRef: any = '';
  public isValid:boolean = false;
  public username: string;

  constructor(
    public menuCtrl: MenuController,
    private afDatabase: AngularFireDatabase,
    private localNotification: LocalNotifications,
    private router: Router,
    private appcomponent:AppComponent,
    private afMessaging: AngularFireMessaging,
    private toastController: ToastController,
    public alertController: AlertController,
    private loginservice:LoginService,
    private storage: Storage,
    public loadingController:LoadingController
  ) { 

      window.home = this;

  }

  subscribeToChannel = async (userToken) => {
    console.log(userToken);

    try {
      const res = await Axios.post('https://iid.googleapis.com/iid/v1/' + userToken + '/rel/topics/all', null,
        { headers: { 'Authorization': 'key=AAAA2RYGQQo:APA91bGs0FgR3EDS54vFLgH5aP0ymXS4X8GM33Ys6sEqUqifck0PEm3nAT7ymvp4WlF932dbyjlk-bYj18GK-BsdYu55LRbLmSjy_3OubCrnz_EsRD_cpnjJCigKvnEasR6NRJgl9-Hg', 'Content-Type': 'application/json' } })
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  ionViewWillEnter() {
       this.menuCtrl.enable(true);
       console.log('home');
      this.appcomponent.ngOnInit();
      this.ngOnInit();
   }

 async Getbroadcast()
 {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    loading.present();
  
    this.loginservice.GetBroadcast().subscribe(
      data => {

        console.log(data);
        if(data.length > 0)
        {
          loading.dismiss();
          this.presentAlertConfirm(data);
        }
  });

 }

 async presentAlertConfirm(data:any) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: data[0].title,
      message: 'Message <strong>'+data[0].description+'</strong>',
      buttons: [
        {
          cssClass: 'primary',
          text: 'Okay',
          handler: () => {
            this.storage.set('aletseen', 'yes');
          }
        }
      ]
    });

    await alert.present();
}

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          this.subscribeToChannel(token);
        },
        (error) => { console.log(error); }
      );
  }


  refreshToken = () => {
    this.afMessaging.onTokenRefresh(() => {
      const messaging = firebase.messaging();
      messaging.getToken()
        .then((userToken) => { this.subscribeToChannel(userToken) })
        .catch((err) => { console.log(err) });
    })
  }


  showToast = async () => {
    const toast = await this.toastController.create({
      message: 'This is emergency message from John Doe',
      duration: 2000
    });
    toast.present();
  }

  onMessage = () => {
    const messaging = firebase.messaging();

    messaging.onMessage((msg) => {
      console.log(msg)
      this.showToast();
    });
  }
  ngOnInit() {

    //this.addFirebaseListener();
    //this.requestPermission();
    //this.onMessage();
    
    this.storage.get('aletseen').then((val) => {
      if(val == null || val == "")
      {
         this.Getbroadcast();
      }
    });
  }

  createNewChild() {
    this.afDatabase.database.ref('users/' + "userID").push({
      username: "Test",
      email: "Test@gmail.com",
      price: Math.round(Math.random() * 10000).toString(),
    })
      .then(() => { console.log("Child created") })
      .catch((e) => { console.log(e) });
  }

  updateChild() {
    this.afDatabase.database.ref('users').child('userID').update({
      price: Math.round(Math.random() * 10000).toString(),
    });
  }

  async addFirebaseListener() {

    let numOfChild = 0;


    this.afDatabase.database.ref('users').on('child_added', (ss) => {
      console.log(ss.exists());
      if (ss.exists()) {
        numOfChild = ss.numChildren();
      }
    });

    this.afDatabase.database.ref('users').child('notifications').on('child_added', (snapshot) => {

      this.afDatabase.database.ref('users').on('child_added', (ss) => {
        console.log(numOfChild, ss.numChildren());
        if (numOfChild != ss.numChildren()) {

          let username = snapshot.val().username;
          let title = snapshot.val().title;
          let description = snapshot.val().description;

          this.createNotification(username, title, description);
          console.log("Child was added");
        }
      });
    });
  }




  createNotification(username, title, description) {
    alert(username + " " + title + " " + " " + description);
    this.localNotification.schedule({
      title: "This is sample title",
      text: 'This is sample text',
      foreground: true,
      priority: 2,
      timeoutAfter: 2000,
      vibrate: true,
    });
  }
  goToNotifications() {
    this.router.navigate(['/notifications']);
  }
  goToChat() {
    this.router.navigate(['/chat-list']);
  }

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }

  goToNewsFeed() {
    this.router.navigate(['/news-feed']);
  }
}
