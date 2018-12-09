import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component'
import { ChartComponent } from './chart/chart.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { StaffsComponent } from './staffs/staffs.component';
import { ChangePasswordComponent } from './change-password/change-password.component'

export const AdminRoutes: Routes = [
  {
    path: '',
    component: ChartComponent,
  }, {
    path: 'reservations',
    component: ReservationsComponent
  }, {
    path: 'staff',
    component: StaffsComponent
  }, {
    path: 'password',
    component: ChangePasswordComponent
  }
];
