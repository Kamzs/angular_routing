import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';

  showHome: boolean;
  showCourses: boolean;
  showAbout: boolean;

  openHome() {
    this.showHome = true;
    this.showCourses = false;
    this.showAbout = false;
  }
  openCourses() {
    this.showHome = false;
    this.showCourses = true;
    this.showAbout = false;
  }
  openAbout() {
    this.showHome = false;
    this.showCourses = false;
    this.showAbout = true;
  }
}
