import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutes } from './rooms.routes';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RoomsRoutes),
    CommonsModule
  ]
})
export class RoomsModule { }
