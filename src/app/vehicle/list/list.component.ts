import { Component } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public vehicleList : VehicleService){
    
  }
  getDetail(index: any) {
      this.vehicleList.index = index; 
  }
}
