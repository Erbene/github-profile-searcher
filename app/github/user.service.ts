/**
 * Created by Maia on 12/20/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private GITHUB_USER_BASE_URL ="http://api.github.com/users/";
  private username: string = 'erbene';

  constructor(private http: Http){}

  getUser(){
    return this.http.get(this.GITHUB_USER_BASE_URL+this.username)
      .map((response: Response) => response.json())
    .catch(this.handleError);
  }
  handleError(error: Response | any){
    console.log(error);
  }
}
