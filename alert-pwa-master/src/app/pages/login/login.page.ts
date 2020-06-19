import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {  MenuController } from '@ionic/angular';
declare var window;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  fname: any = '';
  password: any = '';

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private toastController: ToastController,
    private loginService: LoginService,
    private storage: Storage,
    private loginservice:LoginService,
    private toastcontroller:ToastController,public loadingController:LoadingController) { }

  ngOnInit() {
    
  }

   ionViewWillEnter() {
       this.menuCtrl.enable(false);
   }

  async onSubmit(newsForm : NgForm) {
    // if (!this.userID || !this.password) {
    //   const text = 'Field Cannot Be Blank!';
    //   this.showToast(text);
    // } else {
    //   console.log(this.userID, this.password);

    //   this.loginService.doLogin(this.userID, this.password)
    //     .subscribe((data: any) => {
    //       console.log(data);
    //     })
    // }

   const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    
    if (!this.fname || !this.password) {
      const text = 'please enter required info';
      this.showToast(text);
    }else
    {
    
    loading.present();
    
       this.loginService.doLogin(this.fname, this.password)
         .subscribe((data: any) => {
                if(data.length > 0)
                {
                this.storage.set('customer', data);
                this.router.navigate(['/home']);
                }else
                {
                  const text = 'please enter valid username or password';
                  this.showToast(text);
                
                }
                loading.dismiss();
         },
            err => { 
                const text = 'please enter valid username or password';
                this.showToast(text);
                loading.dismiss();
                
        });
    }
  }

  showToast = async (msg: any) => {
    const toast = await this.toastController.create({ animated: true, message: msg, duration: 2000, position: 'bottom' });
    toast.present();
  }

  // home() {
  //   this.router.navigateByUrl('home');
  // }


}
