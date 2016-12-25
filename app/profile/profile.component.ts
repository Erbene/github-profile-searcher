/**
 * Created by Maia on 12/20/2016.
 */
import { Component, OnInit } from '@angular/core';

import { UserService as GithubUserService } from '../github/user.service';
import { User as GithubUser } from '../github/user.model';
import { Repository as GithubRepository} from '../github/repository.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  moduleId: module.id
})
export class ProfileComponent implements OnInit {
  public user:GithubUser;
  public userRepositories: GithubRepository[];

  constructor(private githubUserService: GithubUserService){}

  ngOnInit(){
    this.userRepositories = [];
    this.githubUserService.onProfileUpdate.subscribe(
      (data) => {
        this.user = data;
        this.userRepositories = [];
        this.githubUserService.getRepositories(this.user).subscribe(
          (data) => {
            for(let repo of data){
              let userRepository = new GithubRepository();
              userRepository.populate(repo);
              this.userRepositories.push(userRepository);
            }
          },
          (error) => { console.log(error) }
        );
      },
        error => console.log(error));

  }
}
