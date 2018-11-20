import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { RouterModule } from '@angular/router';
import { HotelRoutes } from './hotel.routes';

@NgModule({
  declarations: [HotelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HotelRoutes)
  ]
})
export class HotelModule { }
