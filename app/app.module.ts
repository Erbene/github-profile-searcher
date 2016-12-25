import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profile/profile.component';
import { ProfileInputComponent }  from './profile/profile-input.component';
import { ProfileSearchComponent }  from './profile/profile-search.component';
import { UserService as GithubUserService } from './github/user.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileInputComponent,
    ProfileSearchComponent
  ],
  providers: [ GithubUserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
