import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers:[ProfileRequestService]
})
export class ProfilesComponent implements OnInit {
user!:Users;
//repo!:Repos;
  //repo!:Repos;
  repos!: Repos[];
  username!:string;
  constructor(public profileService:ProfileRequestService,public userRepos:ProfileRequestService) { }
  searchprofile(){
    this.profileService.updateProfile(this.username)
    this.profileService.profileRequest()
    this.user=this.profileService.user
    //this.profileService.profileRequestRepos()
    this.userRepos.profileRequestRepos()
  }
  ngOnInit() {

   console.log("what is")
  console.log(this.userRepos)
  }
}
