import { Component } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(public vehicleList : VehicleService){
  }
  index:any = this.vehicleList.index;

}
