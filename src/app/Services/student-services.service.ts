import { Injectable } from '@angular/core';
import { Student } from '../models/student';
@Injectable()
export class StudentServicesService {

  constructor() { }
  public getStudents(): Student[] {
    const studentsList: Student[] = [
      // tslint:disable-next-line:max-line-length
      { Id: 1, Description: 'this is first description', Manager: 'name1', LeaveType: 'planned', EndDate: new Date(), StartDate: new Date(), Reason: 'nothing' },
      { Id: 2, Description: 'this is second description', Manager: 'name2', LeaveType: 'planned', EndDate: new Date(), StartDate: new Date(), Reason: 'nothing' },
      { Id: 3, Description: 'this is third description', Manager: 'name3', LeaveType: 'un planned', EndDate: new Date(), StartDate: new Date(), Reason: 'nothing' }]
    return studentsList;
  }
}
