import { UtilModule } from './../util/util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import { DialogModule } from '../dialog/dialog.module';
import { ReservationService } from './reservation.service';
import { RoomsService } from './rooms.service';
import { RevenueService } from './revenue.service';
import { StaffService } from './staff.service';

@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [],
  providers: [
    LoginService,
    UserService,
    DialogModule,
    ReservationService,
    RoomsService,
    RevenueService,
    StaffService
  ]
})
export class ApiModule {}
