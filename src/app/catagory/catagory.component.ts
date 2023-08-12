import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent {
  constructor(public vehicleList : VehicleService){
    
  }
  index = this.vehicleList.index;
  getDetail(i: any) {
      this.vehicleList.index = i; 
  }
}
