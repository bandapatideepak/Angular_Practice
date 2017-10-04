import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule, MdNativeDateModule, MdButtonModule, MdTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { HolidayListComponent } from './Components/holiday-list/holiday-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    HolidayListComponent,
  ],
  entryComponents: [
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdNativeDateModule,
    MdButtonModule,
    MdTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

