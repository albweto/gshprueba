import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(private http:HttpClient) { }

  getAllPeople(){
    return this.http.get<any>(`http://localhost:4200/api/people`, {observe: 'response'})
    .toPromise()
    .then(res => <People[]> res.body)
    .then(data => <People[]> data);
  }
}
