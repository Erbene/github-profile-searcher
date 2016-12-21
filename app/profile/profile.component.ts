/**
 * Created by Maia on 12/20/2016.
 */
import { Component } from '@angular/core';

import { UserService as GithubUserService } from '../github/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  moduleId: module.id
})
export class ProfileComponent {
  constructor(private githubUserService: GithubUserService){
    this.githubUserService.getUser().subscribe((data)=>console.log(data),error => console.log(error));
  }
}
