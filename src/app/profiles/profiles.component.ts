import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { ProfileRequestService } from '../profile-http/profile-request.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
user!:Users;
  constructor(private profileService:ProfileRequestService) { }

  ngOnInit(): void {
   this.profileService.profileRequest()
   this.user=this.profileService.user
  }
}
