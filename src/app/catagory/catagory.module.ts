import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoryComponent } from './catagory.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatagoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : CatagoryComponent
      }
    ])
  ]
})
export class CatagoryModule { }
