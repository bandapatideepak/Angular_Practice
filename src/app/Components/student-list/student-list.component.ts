import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentServicesService } from '../../Services/student-services.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { MdDialog } from '@angular/material';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentServicesService]

})
export class StudentListComponent implements OnInit {
  StudentsData: Student[] = this.studentService.getStudents();
  title = 'app';
  openDialog() {
    this.dialog.open(AddStudentComponent, {
      disableClose: true,
      width: '600px',
      height: '600px'
    });
  };
  DeleteRow(data) {
    const index: number = this.StudentsData.indexOf(data.Id)
    this.StudentsData.splice(index, 1);
  };
  constructor(private studentService: StudentServicesService, public dialog: MdDialog) { }
  ngOnInit() {
  }

}
