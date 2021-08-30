import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
user!:Users;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      login:string;
       name:string;
        company:string; 
        followers:number;
        following:number;
         public_repos:number ;
    }
    
    this.http.get<ApiResponse>("https://api.github.com/users/wanjugu96").subscribe(data=>{
      //successfull Api request
      this.user=new Users(data.login,data.name,data.company,data.followers,data.following,data.public_repos)
  },err=>
  this.user=new Users("Wanjugu Mungau","Wanjugu M","Getbee UAE",1,9,33)
 // console.log("an Error occured.")
    )
  }
}
