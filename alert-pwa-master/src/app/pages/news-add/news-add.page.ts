import { Component, OnInit } from '@angular/core';
import { news } from '../../Models/news';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastController , LoadingController } from '@ionic/angular';
declare var window;

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.page.html',
  styleUrls: ['./news-add.page.scss'],
})
export class NewsAddPage implements OnInit {

  news: news = {title:'',text:'',type:'',userid:'1',date:new Date().toString(),Thumbnail:'',url_link:''};

  constructor(private router:Router,private loginservice:LoginService,private toastcontroller:ToastController,public loadingController:LoadingController) { }

  ngOnInit() {
  }

async onSubmit(newsForm : NgForm)
{
      console.log(this.news);

     const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    loading.present();
    
    this.loginservice.AddNews(this.news).subscribe(
            data => {

              console.log(data);
              loading.dismiss();
              this.router.navigate(['/news-feed']);
            },
            err => { 
              if(err.error.text == "New record created successfully")
              {
                loading.dismiss();
                window.getnews.ngOnInit();
                this.router.navigate(['/news-feed']);
              }
            }
    );
  }
}
