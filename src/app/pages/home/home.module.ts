import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { CommonsModule } from '../../commons/commons.module';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    CommonsModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
  ]
})
export class HomeModule { }
