import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile/profile.component';
import { UserService as GithubUserService } from './github/user.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProfileComponent ],
  providers: [ GithubUserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
