import { Component, OnInit } from '@angular/core';
import { Course, DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listofcourses',
  templateUrl: './listofcourses.component.html',
  styleUrls: ['./listofcourses.component.css']
})
export class ListofcoursesComponent implements OnInit {

  courses: Array<Course>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCourses().subscribe(
      list => {
        this.courses = list;
      }
    );
  }

}
