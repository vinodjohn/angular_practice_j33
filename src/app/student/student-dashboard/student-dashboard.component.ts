import {Component, OnInit} from '@angular/core';
import {Student} from '../../shared/models/Student';
import {StudentService} from '../../shared/services/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'studentId', 'name', 'joinDate', 'isActive', 'school', 'grade'];
  students: Student[] = [];
  title: string = "Student Dashboard";

  constructor(private _studentService: StudentService) {
  }

  ngOnInit(): void {
    this._studentService.getAllStudents().subscribe(value => this.students = value);
  }
}
