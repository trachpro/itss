import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { ChartComponent } from './chart/chart.component';
import { CommonsModule } from '../../commons/commons.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StaffsComponent } from './staffs/staffs.component';
import { ChangePasswordComponent } from './change-password/change-password.component'

@NgModule({
  declarations: [
    AdminComponent,
    ChartComponent,
    ReservationsComponent,
    StaffsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    CommonsModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AdminModule { }
