/**
 * Created by Maia on 12/20/2016.
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';
import { User } from './user.model';

@Injectable()
export class UserService {
  private GITHUB_USER_BASE_URL ="http://api.github.com/users/";
  private GITHUB_USER_REPOSITORY_URL ="/repos";

  onProfileUpdate = new EventEmitter<User>();

  constructor(private http: Http){}

  getUser(username: string){
    return this.http.get(this.GITHUB_USER_BASE_URL+username)
      .map((response: Response) => {
        let user = new User();
        user.populate(response.json());
        this.onProfileUpdate.emit(user);
        return user;
      })
    .catch(this.handleError);
  }
  getRepositories(user:User){
    return this.http.get(this.GITHUB_USER_BASE_URL+user.login+this.GITHUB_USER_REPOSITORY_URL)
      .map((response: Response) => response.json())
    .catch(this.handleError);
  }
  handleError(error: Response | any){
    console.log(error);
    return Observable.throw(error);
  }
}
