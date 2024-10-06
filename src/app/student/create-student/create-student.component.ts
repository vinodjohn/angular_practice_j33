import { Component } from '@angular/core';
import {StudentService} from '../../shared/services/student.service';
import {Student} from '../../shared/models/Student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  constructor(private _studentService: StudentService) {
  }

  submit() {
    //this._studentService.createStudent(new Student());
  }
}
