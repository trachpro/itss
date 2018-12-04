import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AdminComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
