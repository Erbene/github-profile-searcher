/**
 * Created by Maia on 12/20/2016.
 */
import { Component } from '@angular/core';

import { UserService as GithubUserService } from '../github/user.service';
import { User as GithubUser } from '../github/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  moduleId: module.id
})
export class ProfileComponent {
  user:GithubUser;
  constructor(private githubUserService: GithubUserService){
    this.githubUserService.getUser().subscribe(
      (data) => {
        console.log(data);
        this.user = new GithubUser(
          data.login,
          data.id,
          data.avatar_url,
          data.gravatar_id,
          data.url,
          data.html_url,
          data.followers_url,
          data.following_url,
          data.gists_url,
          data.starred_url,
          data.subscriptions_url,
          data.organizations_url,
          data.repos_url,
          data.events_url,
          data.received_events_url,
          data.type,
          data.site_admin,
          data.name,
          data.company,
          data.blog,
          data.location,
          data.email,
          data.hireable,
          data.bio,
          data.public_repos,
          data.public_gists,
          data.followers,
          data.following,
          new Date(data.created_at),
          new Date(data.updated_at)
        );
      },
        error => console.log(error));
  }
}
