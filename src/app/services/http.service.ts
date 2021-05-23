import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) {}


  get(url){
    return this.http.get(url);
  }

  post(url, data){
    return this.http.post(url, data);
  }
}
