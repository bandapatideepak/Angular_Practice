import { Injectable } from '@angular/core';
import { Student } from '../models/student';
@Injectable()
export class StudentServicesService {

  constructor() { }
  public getStudents(): Student[] {
    const studentsList: Student[] = [
      {Id: 1, Description: 'this is first description', Name: 'name1' },
      {Id: 2, Description: 'this is second description', Name: 'name2' },
      {Id: 3, Description: 'this is third description', Name: 'name3' }]
    return studentsList;
  }
}
