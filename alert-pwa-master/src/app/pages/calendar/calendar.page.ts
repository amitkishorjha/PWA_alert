import { Component, OnInit, ViewChild } from '@angular/core';

import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;

  @ViewChild(CalendarComponent, { static: false }) myCalendar: CalendarComponent;

  showAddEvent: boolean;
  newEvent = {
    title: '',
    description: '',
    imageURL: '',
    startTime: '',
    endTime: ''
  };

  allEvents = [];

  minDate = new Date().toISOString();
  
  constructor() { }

  ngOnInit() {
  }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }



  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      imageURL: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  addEvent() {
    this.allEvents.push({
      title: this.newEvent.title,
      startTime: new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime),
      description: this.newEvent.description,
      imageURL: this.newEvent.imageURL
    });
    this.showHideForm();
  }

  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }

}
