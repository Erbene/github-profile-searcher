/**
 * Created by Maia on 25/12/16.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService as GithubUserService } from '../github/user.service';

@Component({
  selector: 'app-profile-input',
  template: `
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
      <form #myform="ngForm">
        <div class="form-group">
          <input type="text" placeholder="Type the profile you want to search here..." class="form-control" id="search-name" name="name" [ngModel]="name"  (keyup)="search(myform)">
        </div>
      </form>
    </div>
  `,
  moduleId: module.id
})
export class ProfileInputComponent {

  name: string;

  constructor(private githubUserService: GithubUserService){}

  search(myform: NgForm){
      this.githubUserService.getUser(myform.value.name).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

}
