/**
 * Created by erbene on 25/12/16.
 */
import { Component } from '@angular/core';
@Component({
  selector: 'app-profile-search',
  template: `
        <div class="row">
            <app-profile-input></app-profile-input>
        </div>
        <hr>
        <div class="row">
            <app-profile></app-profile>
        </div>
    `
})
export class ProfileSearchComponent {
}
