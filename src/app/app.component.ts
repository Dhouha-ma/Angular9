import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9project';
  contact = {
    name: 'med',
    email: 'med@gmail.com'
  }
}
