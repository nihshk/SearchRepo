import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username:string;
  private client_id = '6788b0b421ab9a2867a0';
  private client_secret = '8f54bbdfdddea535649deaa5e4912cfbc23ca42c';

  constructor(private _http:Http) {
    console.log('Github Service Ready...');
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'?client_secret='+this.client_secret)
    .map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'?client_secret='+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}
