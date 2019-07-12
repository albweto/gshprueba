import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(private http:HttpClient) { }


  getAllVehicles(){
    
    return this.http.get<any>(`http://localhost:4200/api/vehicles`, {observe: 'response'})
    .toPromise()
    .then(res => <Vehicle[]> res.body)
    .then(data => <Vehicle[]> data);
  }
}
