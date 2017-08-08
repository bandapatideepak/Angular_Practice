import { Injectable } from '@angular/core';
import { Holiday } from '../models/holiday';
import { WeekDays } from '../Components/holiday-list/week-days.enum';

@Injectable()
export class HolidayService {
  public getHolidays(): Holiday[] {
    const holidayList: Holiday[] = [
      { Date: 'January 13,2017', Name: 'Bhogi/Pongal', Day: WeekDays[WeekDays.Friday] },
      { Date: 'January 13,2017', Name: 'Republic Day', Day: WeekDays[WeekDays.Thursday] },
      { Date: 'January 13,2017', Name: 'Holi', Day: WeekDays[WeekDays.Monday] },
      { Date: 'January 13,2017', Name: 'Ugadi', Day: WeekDays[WeekDays.Tuesday] },
      { Date: 'January 13,2017', Name: 'May Day', Day: WeekDays[WeekDays.Monday] },
      { Date: 'January 13,2017', Name: 'Ramazan', Day: WeekDays[WeekDays.Monday] },
      { Date: 'January 13,2017', Name: 'Independence Day', Day: WeekDays[WeekDays.Tuesday] },
      { Date: 'January 13,2017', Name: 'Ganesh Chathurthi', Day: WeekDays[WeekDays.Friday] },
      { Date: 'January 13,2017', Name: 'Dussehra', Day: WeekDays[WeekDays.Friday] },
      { Date: 'January 13,2017', Name: 'Gandhi Jayanthi', Day: WeekDays[WeekDays.Monday] },
      { Date: 'January 13,2017', Name: 'Diwali', Day: WeekDays[WeekDays.Wednesday] },
      { Date: 'January 13,2017', Name: 'Christmas', Day: WeekDays[WeekDays.Monday] },
      { Date: 'January 13,2017', Name: 'New Years Day', Day: WeekDays[WeekDays.Sunday] }
    ];
    return holidayList;
  }
  constructor() { }

}
