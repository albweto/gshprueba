import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from '../service/people-service.service';
import { People } from '../models/People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  person: People[];
  constructor(private peopleService: PeopleServiceService) { }

  ngOnInit() {
    this.peopleService.getAllPeople().then(person => this.person = person);
  }

}
