import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component'
import { ChartComponent } from './chart/chart.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
    }, {
        path: 'chart',
        component: ChartComponent
    }
];
