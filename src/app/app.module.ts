import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        pathMatch : 'full',
        redirectTo : 'vehicle'

      },
      {
        path : 'catagory',
        loadChildren : () => import('./catagory/catagory.module')
        .then(mod => mod.CatagoryModule)

      },
      {
        path : 'vehicle',
        loadChildren : () => import('./vehicle/vehicle.module')
        .then(mod => mod.VehicleModule)

      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
