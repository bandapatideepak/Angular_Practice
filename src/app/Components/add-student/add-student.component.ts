import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Student } from '../../models/student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  SaveDetails() {
    console.log(this.student.Name + 'click event is working fine');
  }
  constructor() { }

  ngOnInit() {
  }

}
