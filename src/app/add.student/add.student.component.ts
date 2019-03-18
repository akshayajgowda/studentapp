import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  student={id1:0, name:"", email:"", date:"", item:"", address:"", phone:""};

  constructor(private studentService:StudentService, private router: Router) { }
 
  onAddStudent(student) {
   this.studentService.onAddStudent(student);
   student = this.studentService.getStudents();
  this.router.navigate(['/list-student']);
}

  ngOnInit() {}

}
