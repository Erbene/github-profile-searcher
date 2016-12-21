import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello {{name}}</h1>
      <app-profile></app-profile>
  `
})
export class AppComponent  {
  name = 'Angular';
}
