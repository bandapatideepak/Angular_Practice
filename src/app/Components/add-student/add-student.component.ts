import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Student } from '../../models/student';
import { MdDialog, MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  dialogbox: any;
  SaveDetails() {
    //this.dialogRef.close();
    console.log(this.student.Description  + 'click event is working fine <<<< !!');
  }
  Cancel() {
  }
  public openDialog() {
    this.dialogbox = this.dialog.open(AddStudentComponent, {
      width: '600px',
      height: '600px'
    });
  };
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

}
