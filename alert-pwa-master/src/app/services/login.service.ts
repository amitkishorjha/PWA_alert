import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';
import { news } from '../Models/news';
import { filter } from '../Models/filter';
import { comment } from '../Models/comment';
import { notification } from '../Models/notification';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentnews:any;
  currnotification:any;
  constructor(
    private http: HttpClient
  ) { }

  doLogin = (fname: any, password: any) => {
    // return this.http.get(environment.BASE_URL + "/login" + JSON.stringify({ userId: userID, password: password }))
    //   .pipe(map((data: any) => { return data; }));
    return this.http.get("http://gifthouse.reliableinfosys.in/pwa/Login.php?FName="+fname+"&Lname=&Password="+password);
  }

  getNewsdata()
  {
    return this.http.get("http://gifthouse.reliableinfosys.in/PWA/connect.php");
  }

  AddNews(news: news)
  {
    let parms:any = news;
    console.log(parms);
    return this.http.get<any>("http://gifthouse.reliableinfosys.in/PWA/addNews.php",{params:parms}); 
  }

  GetNewsComments(newsid:string)
  {
    return this.http.get("http://gifthouse.reliableinfosys.in/pwa/getcomment.php?newsid="+newsid);
  }

  Addcomment(comment:comment)
  {
    let parms:any = comment;
    console.log(parms);
    
    return this.http.get<any>("http://gifthouse.reliableinfosys.in/PWA/addcomment.php",{params:parms});
  }

  getNotifications(userid:any)
  {
      return this.http.get("http://gifthouse.reliableinfosys.in/PWA/Get_notification.php?userid="+userid);
  }

  AddNotifiction(notification:notification)
  {
    let parms:any = notification;
    console.log(parms);
    
    return this.http.post<any>("http://localhost/dashboard/PWA/Add_notification.php",notification);
  }

  filterNotifiction(filter:filter)
  {
    let parms:any = filter;
    return this.http.get<any>("http://gifthouse.reliableinfosys.in/PWA/Search_Notification.php",{params:parms});
  }


  GetBroadcast()
  {
    return this.http.get<any>("http://gifthouse.reliableinfosys.in/pwa/Get_broadcast.php");
  }

  GetUsersList()
  {
    return this.http.get<any>("http://gifthouse.reliableinfosys.in/pwa/UserList.php");
  }

}
