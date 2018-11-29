import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutes } from './profile.routes';
import { CommonsModule } from '../../commons/commons.module';
import { HistoryComponent } from './history/history.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [ProfileComponent, HistoryComponent, PasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    CommonsModule
  ],
  exports: [
  ]
})
export class ProfileModule { }
