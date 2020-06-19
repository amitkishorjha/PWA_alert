import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { comment } from '../../Models/comment';
import { ToastController , LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  currentnews:any;
  comments:any;
  commenttext:string;
  constructor(private loginservice:LoginService,private toastcontroller:ToastController,public loadingController:LoadingController) { }

  ngOnInit() {
    this.currentnews = this.loginservice.currentnews;
    console.log(this.currentnews);

    this.getnewsComments(this.currentnews.id);
  }

  getnewsComments(id:string)
  {
      this.loginservice.GetNewsComments(id).subscribe(
      data => {
        console.log(data);
        this.comments = data;
      });
  }

 async addcomment(newsid:string)
  {
     const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    loading.present();
      let comment: comment = {newsid:newsid,userid:'1',text:this.commenttext,type:'',date:new Date().toString()};

      this.loginservice.Addcomment(comment).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      }, err => { 
              if(err.error.text == "New record created successfully")
              {
                loading.dismiss();
                this.commenttext = '';
                this.ngOnInit();
              }
            }
      );

  }

}
