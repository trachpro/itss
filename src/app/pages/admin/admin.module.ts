import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { ChartComponent } from './chart/chart.component';
import { CommonsModule } from '../../commons/commons.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ChartComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    CommonsModule,
    FormsModule
  ]
})
export class AdminModule { }
