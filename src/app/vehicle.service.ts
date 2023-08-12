import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }
  list = [
    {
      category: 'SUV',
      name: 'Kia Sorento',
      fuelType: 'Gasoline/Diesel',
      color: 'black',
      model: 2019,
      description : 'Experience the pinnacle of Kia Sorento with the PhoenixRider, where style, performance, and luxury seamlessly converge.'
    },
    {
      category: 'SUV',
      name: 'Hyndai Creta',
      fuelType: 'Diesel',
      color: 'blue',
      model: 2020,
      description : 'Experience the pinnacle of Hyndai Creta with the PhoenixRider, where style, performance, and luxury seamlessly converge.'
    },
    {
      category: 'SUV',
      name: 'Porsche Ceyenne',
      fuelType: 'Gasoline/Diesel',
      color: 'silver',
      model: 2023,
      description : 'Experience the pinnacle of Porsche Ceyenne with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Sedan',
      name: 'Audi A6',
      fuelType: 'Diesel',
      color: 'red',
      model: 2014,
      description : 'Experience the pinnacle of Audi A6 with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Sedan',
      name: 'Honda Civic',
      fuelType: 'Diesel',
      color: 'grey',
      model: 2021,
      description : 'Experience the pinnacle of Honda Civic with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Sedan',
      name: 'BMW 3 Series',
      fuelType: 'Gasoline/Diesel',
      color: 'blue',
      model: 2018,
      description : 'Experience the pinnacle of BMW 3 Series with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Minivan',
      name: 'Honda Odyssey',
      fuelType: 'Gasoline/Diesel',
      color: 'black',
      model: 2009,
      description : 'Experience the pinnacle of Honda Odyssey with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Minivan',
      name: 'Dodge Caravan',
      fuelType: 'Gasoline',
      color: 'yellow',
      model: 2015,
      description : 'Experience the pinnacle of Dodge Caravan with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    },
    {
      category: 'Minivan',
      name: 'Toyota Sienna',
      fuelType: 'Gasoline/Diesel',
      color: 'silver',
      model: 2017,
      description : 'Experience the pinnacle of Toyota Sienna with the PhoenixRider, where style, performance, and luxury seamlessly converge.'

    }
    ]
  index:any = null;
}
