import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {CreateStudentComponent} from './student/create-student/create-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
 /* {
    path: 'update-student/:id',
    component: UpdateStudentComponent
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*localhost:4200/ - Student Dashboard page
localhost:4200/create-student - Student form page
localhost:4200/teacher - Teacher Dashboard
localhost:4200/create-teacher - Create teacher form page
localhost:4200/update-student/3 - update student form page*/
