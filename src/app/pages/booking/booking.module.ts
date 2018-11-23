import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { BookingRoutes } from './booking.routes';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BookingRoutes),
    CommonsModule
  ]
})
export class BookingModule { }
