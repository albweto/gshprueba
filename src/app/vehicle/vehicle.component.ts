import { Component, OnInit } from '@angular/core';
import { VehicleServiceService } from '../service/vehicle-service.service';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  cars: Vehicle[];
  constructor(private VehicleService: VehicleServiceService) { }

  ngOnInit() {
    this.VehicleService.getAllVehicles().then(cars => this.cars = cars);
  }

}
