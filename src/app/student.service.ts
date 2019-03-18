import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
students=[];


  constructor() {

    var defaultstudents= [{id1:1, name:"Akshay", email:"akshay@gmail", date:"2001-01-01", item:"english,kannada,hindi" , address:"USA", phone:"12345678"},
    {id1:2, name:"Ravi", email:"ravi@gmail", date:"2001-01-02", item:"english,kannada,hindi" , address:"USA", phone:"87654321"},
    {id1:3, name:"Sham", email:"sham@gmail", date:"2001-01-03", item:"english,kannada,hindi" , address:"USA", phone:"24351541"}];
  
    if(localStorage.getItem('studentdata')==null){
      this.students= defaultstudents;
      this.setLocalStorage(this.students);
    }else{
      this.getLocalStorage();
    }
  
  }  

  setLocalStorage(list) {
    localStorage.setItem('studentsdata',JSON.stringify(list));
  }

  getLocalStorage() {
  this.students = JSON.parse(localStorage.getItem('studentsdata'));
  }

  getStudents() {
    return this.students;
   }
   
   onAddStudent(student) {
    student.id1 = Math.round(Math.random()*100000);
      this.students.push(student);
      this.setLocalStorage(this.students);
   }
   
   onDelete(student) {
     for(var i=0;i<this.students.length;i++) {
       if(student.id1 == this.students[i].id1) {
         this.students.splice(i,1);
         this.setLocalStorage(this.students);
       }
     }
     
   }
   getStudentById(id1){
     for(var i = 0;i<this.students.length;i++){
       if(id1 == this.students[i].id1){
         return this.students[i];
       }
     }
     return null;
   }
   
   onUpdateStudent(student) {
     for(var i=0;i<this.students.length;i++) {
     if(student.id1 == this.students[i].id1) {
       this.students[i] = student;
       break;
     }
   }   
   this.setLocalStorage(this.students);
   }

}
