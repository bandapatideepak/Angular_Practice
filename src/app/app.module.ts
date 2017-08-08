import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ListofstudentsDirective } from './listofstudents.directive';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { HolidayListComponent } from './Components/holiday-list/holiday-list.component';

const appRoutes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  {
    path: 'student-list',
    component: StudentListComponent,
    data: { title: 'Student List' }
  },
  {
    path: '',
    redirectTo: '/student-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListofstudentsDirective,
    StudentListComponent,
    AddStudentComponent,
    HolidayListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

