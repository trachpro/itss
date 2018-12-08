import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutes } from './rooms.routes';
import { CommonsModule } from '../../commons/commons.module';
import { RoomComponent } from './room/room.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RoomsRoutes),
    CommonsModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class RoomsModule { }
