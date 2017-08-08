import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../Services/holiday.service';
import { Holiday } from '../../models/holiday';
@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
  providers: [HolidayService]
})
export class HolidayListComponent implements OnInit {
  Innroad_holidays: Holiday[] = this.holidayService.getHolidays();
  constructor(private holidayService: HolidayService) { }
  ngOnInit() {
  }

}
