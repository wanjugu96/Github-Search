import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../users';
import {environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
user!:Users;
constructor(private http:HttpClient) {
  this.user = new Users("","","",0,0,0);
 }
 profileRequest(){
  interface ApiResponse{
    login:string;
     name:string;
      company:string; 
      followers:number;
      following:number;
       public_repos:number ;
  }
 
 let promise=new Promise<void>((resolve, reject) => {
   this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token=' + environment.apiKey).toPromise().then(response=>{
     this.user.name=response.name
     this.user.login=response.login
     this.user.company=response.company
     this.user.followers=response.followers
     this.user.following=response.following
     this.user.public_repos=response.public_repos
      resolve()
   },
   error=>{
   //(,,,1,9,33)

     this.user.name="Wanjugu Mungau"
     this.user.login="Wanjugu M"
     this.user.company="Getbee UAE"
     this.user.followers=1
     this.user.following=9
     this.user.public_repos=33
     reject(error)
   })
 })
 return promise
}
}