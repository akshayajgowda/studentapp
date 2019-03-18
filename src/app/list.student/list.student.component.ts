import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.student',
  templateUrl: './list.student.component.html',
  styleUrls: ['./list.student.component.scss'],
})
export class ListStudentComponent implements OnInit {

  students = this.studentService.getStudents();

  constructor(private studentService: StudentService, private router:Router) { }

onDelete(student) {
 this.studentService.onDelete(student);
}

onEdit(student) {
  this.router.navigate(['/edit-student/'+student.id1]);
}

deleteAll(){
  this.students=[];
}
  ngOnInit() {}

}
