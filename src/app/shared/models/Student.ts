export class Student {
  id: number;
  studentId: string;
  name: string;
  joinDate: Date;
  isActive:boolean;
  school:string;
  grade:number;

  constructor(id: number, studentId: string, name: string, joinDate: Date, isActive: boolean, school: string, grade: number) {
    this.id = id;
    this.studentId = studentId;
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.grade = grade;
  }
}
