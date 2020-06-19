import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
declare var window;

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
   newsdata:any;
  constructor(private router:Router,private loginservice:LoginService) { 
          window.getnews = this;
  }

  ngOnInit() {
    this.getNews();
  }

  goToNews(currnews) {
    this.loginservice.currentnews = currnews;
    this.router.navigate(['/news-detail']);
  }

  showAddNews() {
    this.router.navigate(['/news-add']);
  }

  getNews()
  {
    this.loginservice.getNewsdata().subscribe(
      data => {
        console.log(data);
        this.newsdata = data;
      });
  }
}
