import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit.student',
  templateUrl: './edit.student.component.html',
  styleUrls: ['./edit.student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private studentService:StudentService, private router: Router) { }
  id1: number;
  private sub: any;
  student:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.id1 = +params['id1']; // (+) converts string 'id' to a number
       console.log("id is "+this.id1);
       this.student= this.studentService.getStudentById(this.id1);

       // In a real app: dispatch action to load the details here.
    });
  }

  onUpdateStudent(student) {
    this.studentService.onUpdateStudent(student);
    student = {id1:'', name:'', email:'', date:'',item:'', address:'', phone:''};
    this.router.navigate(['/list-student']);
   }
}
