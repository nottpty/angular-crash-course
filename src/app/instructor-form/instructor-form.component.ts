import { Component } from '@angular/core';

@Component({
  selector: 'instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent {
  categoryList = [
    { id: 1, value: 'development'},
    { id: 2, value: 'music'},
    { id: 3, value: 'art'}
  ];

  submit(course) {
    console.log(course);
  }
}
