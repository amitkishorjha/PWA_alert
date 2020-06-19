import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private http: HttpClient
  ) { }

  subscribeToServer() {
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('Authorization', 'key');

    // return this.http.post('https://fcm.googleapis.com/fcm/send', null, { headers:})
  }
}
