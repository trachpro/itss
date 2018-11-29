import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutes } from './rooms.routes';
import { CommonsModule } from '../../commons/commons.module';
import { RoomComponent } from './room/room.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [RoomsComponent, RoomComponent, BookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RoomsRoutes),
    CommonsModule
  ]
})
export class RoomsModule { }
