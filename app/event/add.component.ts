import { Component, OnInit } from '@angular/core';

import { EEvent } from './event';
import { EventService } from './event.service';

@Component({
  moduleId: module.id,
  selector: 'event-add',
  templateUrl: 'add.component.html'
})
export class EventAddComponent implements OnInit {

  model: EEvent = new EEvent();
  submitted: boolean = false;

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
  }

  get diag() {
    return JSON.stringify(this.model);
  }

  onSubmit() {
    this.submitted = true;
    this._eventService.save(this.model);
  }
}
