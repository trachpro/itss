import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component'
import { ChartComponent } from './chart/chart.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
  }, {
    path: 'chart',
    component: ChartComponent
  }, {
    path: 'reservations',
    component: ReservationsComponent
  }
];
