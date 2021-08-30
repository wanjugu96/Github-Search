import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../users';
import {environment } from '../../environments/environment';
import { Repos } from '../repos';
@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
user!:Users;
  repo!: Repos;
  newrepo:any
  private username!: string;
constructor(private http:HttpClient) {
  this.user = new Users("","","",0,0,0,"","","");
  this.repo=new Repos("","","")
  this.username="wanjugu96"
 }
 profileRequest(){
  interface ApiResponse{
    login:string;
     name:string;
      company:string; 
      followers:number;
      following:number;
       public_repos:number ;
       avatar_url:string;
       bio:string;
       html_url:string;
  }
 
 let promise=new Promise<void>((resolve, reject) => {
   this.http.get<ApiResponse>('https://api.github.com/users/'+this.username+'?access_token=' + environment.apiKey).toPromise().then(response=>{
     this.user.name=response.name
     this.user.login=response.login
     this.user.company=response.company
     this.user.followers=response.followers
     this.user.following=response.following
     this.user.public_repos=response.public_repos
     this.user.avatar_url=response.avatar_url
     this.user.bio=response.bio
     this.user.html_url=response.html_url
      resolve()
   },
   error=>{
     this.user.name="Wanjugu Mungau errror woi"
     this.user.login="Wanjugu M"
     this.user.company="Getbee UAE"
     this.user.followers=1
     this.user.following=9
     this.user.public_repos=100
     this.user.avatar_url="https://avatars.githubusercontent.com/u/18323957?v=4"
     this.user.bio="Enthusiastic about tech"
     this.user.html_url="https://github.com/wanjugu96"
     reject(error)
   })
 })
 return promise
}
profileRequestRepos(){
  interface ApiResponse{
     name:string;
     html_url:string;
     description:string;
     
  }
 //https://api.github.com/repos/wanjugu96/Delani-Studio
 //https://api.github.com/users/wanjugu96/repos (all my repos)
 let mypromise=new Promise<void>((resolve, reject) => {
   //   this.http.get<ApiResponse>('https://api.github.com/users/wanjugu96/repos?access_token=' + environment.apiKey).toPromise().then(reporesponse=>{

   this.http.get<ApiResponse>('https://api.github.com/users/'+ this.username+'/repos?access_token=' + environment.apiKey).toPromise().then(reporesponse=>{
    //  this.repo.name=reporesponse.name
    //  this.repo.html_url=reporesponse.html_url
    //  this.repo.description=reporesponse.description
    this.newrepo=reporesponse;
      resolve()
   },
   error=>{
   //(,,,1,9,33)

     this.repo.name="Activity 4"
     this.repo.html_url="https://github.com/wanjugu96/activity4"
 
     reject(error)
   })
 })
 return mypromise
}
updateProfile(username:string){
this.username=username;
}
}