import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  COURSES = [
    new Course ('1', 'kurs java', 'spring / kolekcje'),
    new Course ('2', 'kurs angular' , 'typescript / html / angular')
  ];

  getCourses(): Observable<Array<Course>> {
    return of(this.COURSES);
  }

  getCourseById(id: string): Course {
    return this.COURSES.find(e => e.id === id);
  }

  getRandomCourse(): Course {
    const n = Math.floor(Math.random() * 2 );
    return this.COURSES[n];
  }

}

export class Course {
  constructor(public id: string, public title: string, public content: string){

  }
}
