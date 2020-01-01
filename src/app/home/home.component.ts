import { Component, OnInit } from '@angular/core';
import { Course, DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private course: Course;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.course = this.service.getRandomCourse();
  }

  getCourse() {
    this.router.navigate(['/courses', this.course.id]);
  }

}
