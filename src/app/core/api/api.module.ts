import { UtilModule } from './../util/util.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CategoryService } from './category.service';
import { ImageService } from './image.service';
import { DialogModule } from '../dialog/dialog.module';
import { ReservationService } from './reservation.service';
import { RoomsService } from './rooms.service';
import { RevenueService } from './revenue.service';

@NgModule({
  imports: [
    CommonModule,
    UtilModule
  ],
  declarations: [],
  providers: [
    LoginService,
    UserService,
    PostService,
    CategoryService,
    ImageService,
    DialogModule,
    ReservationService,
    RoomsService,
    RevenueService
  ]
})
export class ApiModule {}
