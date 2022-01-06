import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = environment.url;
  constructor(private http: HttpClient) { }


  submitUser(user){
    return this.http.post(this._url+'/api/post/register', user);
  }
  getUsers(){
    return this.http.get(this._url+'/api/post/register');
  }


  //login pass the parameter email and password
  login(username :any, password: any){
      return this.http.post(this._url+'login', {username, password}); 
  }

}
