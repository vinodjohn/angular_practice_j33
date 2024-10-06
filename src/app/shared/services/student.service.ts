import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private STUDENT_BASE_URL = 'student';

  constructor(private http: HttpClient) { }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENT_BASE_URL);
  }

  public createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.STUDENT_BASE_URL, student);
  }
}
